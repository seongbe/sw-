import styled from 'styled-components/native';
 

export const Text = styled.Text`
margin-top: ${({ theme }) => theme.spacing.small};
margin-left: ${({ theme }) => theme.spacing.small};
font-size: ${({ theme }) => theme.fontSize.medium};
text-align: left;
color: ${({ theme }) => theme.colors.black};
font-weight: 800;
`;

export const ItemContainer = styled.View`
 display: flex;
  justify-content: flex-start; /* 수직 축 정렬 */
  align-items: flex-start; 
      
  margin-top: 10%;
 
`;


export const RowContainer = styled.View`
 display: flex;
 flex-direction: row;
 
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
`;



