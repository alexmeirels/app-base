import { useCallback, useState } from 'react';

import { Icon, resolveLucideIcon } from '../Icon';

import {
  FieldGroup,
  FieldLabel,
  InputWithIconRow,
  RequiredMark,
  RightIconPressable,
  RightIconStatic,
  StyledInput,
  StyledInputFlex,
} from './styles';
import type { InputProps } from './types';

const DEFAULT_RIGHT_ICON_COLOR = '#414651';
const RIGHT_ICON_SIZE = 20;

export const Input = ({
  label,
  required = false,
  password = false,
  rightIconName,
  rightIconColor,
  onRightIconPress,
  rightIconDisabled = false,
  secureTextEntry,
  ...props
}: InputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const iconColor = rightIconColor ?? DEFAULT_RIGHT_ICON_COLOR;

  const handleTogglePasswordVisibility = useCallback(() => {
    setPasswordVisible(visible => !visible);
  }, []);

  const effectiveRightIconName = password
    ? passwordVisible
      ? 'EyeOff'
      : 'Eye'
    : rightIconName;
  const effectiveOnRightIconPress = password ? handleTogglePasswordVisibility : onRightIconPress;
  const effectiveSecureTextEntry = password ? !passwordVisible : secureTextEntry;

  const showRightIcon =
    effectiveRightIconName != null &&
    effectiveRightIconName.length > 0 &&
    resolveLucideIcon(effectiveRightIconName) != null;

  const inputProps = { ...props, secureTextEntry: effectiveSecureTextEntry };

  const inputNode = showRightIcon ? <StyledInputFlex {...inputProps} /> : <StyledInput {...inputProps} />;

  const iconElement =
    showRightIcon && (
      <Icon color={iconColor} name={effectiveRightIconName} size={RIGHT_ICON_SIZE} />
    );

  const rightSlot =
    showRightIcon &&
    iconElement &&
    (effectiveOnRightIconPress != null && !rightIconDisabled ? (
      <RightIconPressable
        accessibilityRole='button'
        hitSlop={8}
        onPress={effectiveOnRightIconPress}
      >
        {iconElement}
      </RightIconPressable>
    ) : (
      <RightIconStatic $dimmed={rightIconDisabled}>{iconElement}</RightIconStatic>
    ));

  const field = showRightIcon ? (
    <InputWithIconRow>
      {inputNode}
      {rightSlot}
    </InputWithIconRow>
  ) : (
    inputNode
  );

  if (label != null && label.length > 0) {
    return (
      <FieldGroup>
        <FieldLabel accessibilityLabel={required ? `${label}, obrigatório` : label}>
          {label}
          {required && <RequiredMark> *</RequiredMark>}
        </FieldLabel>
        {field}
      </FieldGroup>
    );
  }

  return field;
};
