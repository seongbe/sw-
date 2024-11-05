// components/ButtonComponent.tsx
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  title: string;
  width?: string;
  height?: string;
  onPress?: () => void | null;
};

const StyledButton = styled(TouchableOpacity)<{ width?: string; height?: string }>`
  background-color: #0d8c99;
  width: ${({ width }) => width || '100px'};
  height: ${({ height }) => height || '50px'};
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-top: 40px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonComponent: React.FC<ButtonProps> = ({ title, width, height, onPress }) => {
  return (
    <StyledButton width={width} height={height} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

export default ButtonComponent;
