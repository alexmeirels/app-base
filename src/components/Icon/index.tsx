import type { IconProps } from './types';
import { resolveLucideIcon } from './lucideIconRegistry';

export { resolveLucideIcon } from './lucideIconRegistry';

export const Icon = ({ name, size = 20, color }: IconProps) => {
  const Cmp = resolveLucideIcon(name);
  if (Cmp == null) {
    return null;
  }
  return <Cmp color={color} size={size} />;
};
