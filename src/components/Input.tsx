import type { TextInputProps } from 'react-native';
import { StyledInput } from './styles';

export const Input = (props: TextInputProps) => <StyledInput placeholderTextColor='#6B7280' {...props} />
