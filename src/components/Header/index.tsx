import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Icon } from '../Icon';

import { Bar, CenterTitle, SideSlot, TitleLayer } from './styles';
import type { HeaderProps } from './types';

const HEADER_ICON_SIZE = 24;

const hasIconName = (name: string | undefined) => name != null && name.trim().length > 0;

export const Header = ({
  title,
  leftIcon,
  onLeftIconPress,
  rightIcon,
  onRightIconPress,
}: HeaderProps) => {
  const theme = useTheme();
  const iconColor = theme.colors.textPrimary;

  const showLeft = hasIconName(leftIcon);
  const showRight = hasIconName(rightIcon);

  const leftNode =
    showLeft &&
    leftIcon != null &&
    (onLeftIconPress != null ? (
      <Pressable
        accessibilityLabel='Voltar'
        accessibilityRole='button'
        hitSlop={8}
        onPress={onLeftIconPress}
      >
        <Icon color={iconColor} name={leftIcon} size={HEADER_ICON_SIZE} />
      </Pressable>
    ) : (
      <Icon color={iconColor} name={leftIcon} size={HEADER_ICON_SIZE} />
    ));

  const rightNode =
    showRight &&
    rightIcon != null &&
    (onRightIconPress != null ? (
      <Pressable accessibilityRole='button' hitSlop={8} onPress={onRightIconPress}>
        <Icon color={iconColor} name={rightIcon} size={HEADER_ICON_SIZE} />
      </Pressable>
    ) : (
      <Icon color={iconColor} name={rightIcon} size={HEADER_ICON_SIZE} />
    ));

  return (
    <Bar>
      <TitleLayer pointerEvents='none'>
        <CenterTitle accessibilityRole='header' numberOfLines={1}>
          {title}
        </CenterTitle>
      </TitleLayer>
      <SideSlot>{leftNode}</SideSlot>
      <SideSlot>{rightNode}</SideSlot>
    </Bar>
  );
};
