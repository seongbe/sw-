// components/ContainerComponent.styles.ts
import styled from 'styled-components/native';
import { View } from 'react-native';

export const StyledContainer = styled(View)<{ width?: string; height?: string; margin?: string }>`
  background-color: #ffffff;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0px'};
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;