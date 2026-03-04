import { ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
