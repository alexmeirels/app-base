import {
  AlertCircle,
  ArrowLeft,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  HelpCircle,
  Info,
  Lock,
  type LucideProps,
  Mail,
  Search,
  User,
  X,
} from 'lucide-react-native';
import type { ComponentType } from 'react';

const registry: Record<string, ComponentType<LucideProps>> = {
  AlertCircle,
  ArrowLeft,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  HelpCircle,
  Info,
  Lock,
  Mail,
  Search,
  User,
  X,
};

const toPascalKey = (name: string) =>
  name
    .trim()
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join('');

export const resolveLucideIcon = (name: string): ComponentType<LucideProps> | undefined => {
  const trimmed = name.trim();
  if (!trimmed) {
    return undefined;
  }
  const direct = registry[trimmed];
  if (direct) {
    return direct;
  }
  return registry[toPascalKey(trimmed)];
};
