import styled from 'styled-components/native';

type ContainerProps = {
  $withGap?: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: center;
  padding: 16px;
  ${({ $withGap }) => $withGap && 'gap: 12px;'}
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;
