import { Animated, Easing } from 'react-native';
import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  getToastVariantIconColor,
  getToastVariantIconName,
  TOAST_ICON_SIZE,
} from './toastVariantVisual';
import {
  ProviderShell,
  ToastAnchor,
  ToastBody,
  ToastLayer,
  ToastMessage,
  ToastSurface,
  ToastTextCol,
} from './styles';
import type { ShowToastOptions, ToastContextValue, ToastVariant } from './types';
import { Icon } from '../Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

const DEFAULT_DURATION_MS = 3200;

type ToastPayload = {
  message: string;
  type: ToastVariant;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (ctx == null) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [toast, setToast] = useState<ToastPayload | null>(null);
  const progress = useRef(new Animated.Value(0)).current;
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimeoutRef.current != null) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const runHideAnimation = useCallback(
    (after?: () => void) => {
      Animated.timing(progress, {
        duration: 200,
        easing: Easing.in(Easing.cubic),
        toValue: 0,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          after?.();
        }
      });
    },
    [progress],
  );

  const hideToast = useCallback(() => {
    clearHideTimer();
    runHideAnimation(() => {
      setToast(null);
    });
  }, [clearHideTimer, runHideAnimation]);

  const showToast = useCallback(
    ({ message, type = 'default', duration = DEFAULT_DURATION_MS }: ShowToastOptions) => {
      clearHideTimer();
      const next: ToastPayload = { message, type };

      const scheduleHide = () => {
        hideTimeoutRef.current = setTimeout(() => {
          hideToast();
        }, duration);
      };

      if (toast == null) {
        setToast(next);
        progress.setValue(0);
        requestAnimationFrame(() => {
          Animated.timing(progress, {
            duration: 240,
            easing: Easing.out(Easing.cubic),
            toValue: 1,
            useNativeDriver: true,
          }).start();
        });
        scheduleHide();
        return;
      }

      setToast(next);
      scheduleHide();
    },
    [clearHideTimer, hideToast, progress, toast],
  );

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  const contextValue = useMemo(
    () => ({
      hideToast,
      showToast,
    }),
    [hideToast, showToast],
  );

  const opacity = progress.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateY = progress.interpolate({
    extrapolate: 'clamp',
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  return (
    <ToastContext.Provider value={contextValue}>
      <ProviderShell>
        {children}
        {toast != null && (
          <ToastLayer pointerEvents='box-none'>
            <ToastAnchor style={{ paddingBottom: Math.max(insets.bottom, 16) + 8 }}>
              <ToastSurface
                accessibilityLiveRegion='polite'
                accessibilityRole='alert'
                style={{
                  opacity,
                  transform: [{ translateY }],
                }}
              >
                <ToastBody>
                  <Icon
                    color={getToastVariantIconColor(toast.type, theme)}
                    name={getToastVariantIconName(toast.type)}
                    size={TOAST_ICON_SIZE}
                  />
                  <ToastTextCol>
                    <ToastMessage>{toast.message}</ToastMessage>
                  </ToastTextCol>
                </ToastBody>
              </ToastSurface>
            </ToastAnchor>
          </ToastLayer>
        )}
      </ProviderShell>
    </ToastContext.Provider>
  );
};
