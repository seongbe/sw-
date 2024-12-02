import styled from 'styled-components/native';

export const MainContainer = styled.View`
display: flex;
margin-top: 10%;
align-items: flex-start; 
width: 95%;
`;

export const MenuText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 
`;

 

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px; /* 아이콘 간격 */
`;

