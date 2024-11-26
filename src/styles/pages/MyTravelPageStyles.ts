 
import styled from 'styled-components/native';
import { ViewProps } from 'react-native'

interface TravelContainerProps extends ViewProps {
    width?: string;
    height?: string;
    bgColor?: string;
  }

export const Text = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
`;

export const TravelContainer = styled.ImageBackground<TravelContainerProps>`
  width: ${({ width }) => width || '349px'};
  height: ${({ height }) => height || '110px'};
  border-radius: 8px;
  overflow: hidden; /* 둥근 모서리에서 이미지가 넘치지 않도록 */
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.background || '#f0f0f0'};
  justify-content: center; /* 내부 콘텐츠 중앙 정렬 */
  align-items: center;
  margin-bottom: 5px;
`;
export const TravelList = styled.View`
 
  display: flex;
  flex-direction: column; /* 컨테이너들을 세로로 정렬 */
  gap:5%;
`;