import { Animated, Dimensions, Easing, Modal as RNModal } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { Icon } from '../Icon';

import {
  AnimatedSheetOuter,
  BackdropPressable,
  BackdropTint,
  CloseIconPressable,
  CloseRow,
  Root,
  Sheet,
  SheetWrap,
} from './styles';
import type { DrawerProps } from './types';

const FALLBACK_SHEET_OFFSET = 360;

const CLOSE_ICON_SIZE = 22;

export const Drawer = ({ visible, onClose, children, testID, maximized = false }: DrawerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const windowHeight = Dimensions.get('window').height;
  const fallbackOffset = maximized ? windowHeight : FALLBACK_SHEET_OFFSET;

  const translateY = useRef(new Animated.Value(fallbackOffset)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [modalMounted, setModalMounted] = useState(false);
  const layoutHeightRef = useRef(0);
  const prevVisibleRef = useRef(visible);

  const runOpen = useCallback(() => {
    const distance =
      layoutHeightRef.current > 0 ? layoutHeightRef.current : fallbackOffset;
    translateY.setValue(distance);
    backdropOpacity.setValue(0);

    const translateIn = maximized
      ? Animated.timing(translateY, {
          duration: 300,
          easing: Easing.out(Easing.cubic),
          toValue: 0,
          useNativeDriver: true,
        })
      : Animated.spring(translateY, {
          damping: 24,
          stiffness: 280,
          toValue: 0,
          useNativeDriver: true,
        });

    Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
      translateIn,
    ]).start();
  }, [backdropOpacity, fallbackOffset, maximized, translateY]);

  const runClose = useCallback(
    (onFinished: () => void) => {
      const distance =
        layoutHeightRef.current > 0 ? layoutHeightRef.current : fallbackOffset;
      Animated.parallel([
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          duration: 260,
          toValue: distance,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          onFinished();
        }
      });
    },
    [backdropOpacity, fallbackOffset, translateY],
  );

  useEffect(() => {
    if (visible) {
      setModalMounted(true);
    }
  }, [visible]);

  useEffect(() => {
    if (!modalMounted || !visible) {
      return;
    }
    runOpen();
  }, [modalMounted, visible, runOpen]);

  useEffect(() => {
    const wasVisible = prevVisibleRef.current;
    if (wasVisible && !visible && modalMounted) {
      runClose(() => {
        setModalMounted(false);
      });
    }
    prevVisibleRef.current = visible;
  }, [visible, modalMounted, runClose]);

  const handleSheetLayout = useCallback(
    (e: { nativeEvent: { layout: { height: number } } }) => {
      layoutHeightRef.current = e.nativeEvent.layout.height;
    },
    [],
  );

  if (!modalMounted) {
    return null;
  }

  return (
    <RNModal
      animationType='none'
      onRequestClose={maximized ? () => {} : onClose}
      statusBarTranslucent
      transparent
      visible
    >
      <Root>
        <BackdropTint
          style={{
            opacity: backdropOpacity.interpolate({
              extrapolate: 'clamp',
              inputRange: [0, 1],
              outputRange: [0, 0.45],
            }),
          }}
        />
        <BackdropPressable
          accessibilityLabel='Fechar'
          accessibilityRole='button'
          disabled={maximized}
          onPress={onClose}
        />
        <SheetWrap $maximized={maximized}>
          <AnimatedSheetOuter
            $maximized={maximized}
            onLayout={handleSheetLayout}
            style={{
              paddingBottom: Math.max(insets.bottom, 12),
              transform: [{ translateY }],
            }}
          >
            {maximized && (
              <CloseRow style={{ paddingTop: Math.max(insets.top, 8) }}>
                <CloseIconPressable
                  accessibilityLabel='Fechar'
                  accessibilityRole='button'
                  hitSlop={8}
                  onPress={onClose}
                  testID='drawer-close-icon'
                >
                  <Icon color={theme.colors.textPrimary} name='X' size={CLOSE_ICON_SIZE} />
                </CloseIconPressable>
              </CloseRow>
            )}
            <Sheet $maximized={maximized} testID={testID}>
              {children}
            </Sheet>
          </AnimatedSheetOuter>
        </SheetWrap>
      </Root>
    </RNModal>
  );
};
