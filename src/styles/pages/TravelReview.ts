import { View } from 'react-native';
import styled from 'styled-components/native';
 

export const Text = styled.Text`
margin-top: ${({ theme }) => theme.spacing.small};
margin-left: ${({ theme }) => theme.spacing.small};
font-size: ${({ theme }) => theme.fontSize.medium};
text-align: left;
color: ${({ theme }) => theme.colors.black};
font-weight: 800;
`;

export const SmallText = styled.Text`
 margin-top: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
`;


export const ItemContainer = styled.View`
 display: flex;
  justify-content: flex-start; /* 수직 축 정렬 */
  align-items: flex-start; 
      
  margin-top: 10%;
 
`;

export const SmileContainer = styled.View`
 display: flex;
  justify-content: flex-start; /* 수직 축 정렬 */
  align-items: flex-start; 
      
  margin-top: 10%;
 
`;


export const RowContainer = styled.View`
 display: flex;
 flex-direction: row;
 justify-content: space-between; /* 자식 간 간격 */
 gap: 16px;
`;

// 뒤로가기 버튼 컨테이너
export const BackButton = styled.TouchableOpacity`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #ddd; /* 버튼 배경색 */
`;

// 뒤로가기 버튼 텍스트
export const BackButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* 텍스트와 버튼을 양쪽으로 배치 */
  width: 100%;
  padding: 0 16px;
  margin-bottom: 16px;
  margin-top: 5%;
`;

export const BottomContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; /* 텍스트와 버튼을 양쪽으로 배치 */
  width: 90%;
  margin-top: 10%;
`;
export const InputBox = styled.TextInput`
  width: 100%;
  height: 50px;
  background-color: #f8f8f8;
  border-radius: 16px; /* 둥근 모서리 */
  padding: 12px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black}; /* 입력 텍스트 색상 */
  border: 1px solid #e0e0e0; /* 테두리 */
  margin-top: 5%;
`;



 
export const StyledContainer = styled(View)<{ width?: string; height?: string; margin?: string }>`
  background-color: #ffffff;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
   
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;