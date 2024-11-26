// components/ContainerComponent.tsx
import React from 'react';
import { StyledContainer } from '../styles/components/ContainerComponent.styles';

type ContainerProps = {
  width?: string;
  height?: string;
  margin?: string;
  children?: React.ReactNode;
};

const ContainerComponent: React.FC<ContainerProps> = ({ width, height, margin,children }) => {
  return (
    <StyledContainer width={width} height={height} margin={margin}>
      {children}
    </StyledContainer>
  );
};

export default ContainerComponent;