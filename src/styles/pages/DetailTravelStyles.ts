import styled from 'styled-components/native';

export const Text = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.small};
  
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

export const BottomText = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.large};
 
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

export const SmallText = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
`;

export const MainContainer = styled.View`
  display: flex;
  margin-top: 10%;
  align-items: flex-start;
  width: 90%;
`;

export const RowContainer = styled.View`
  display: flex;
  margin-top: 10%;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const ImageContainer = styled.View`
  width: 42px; /* 부모 너비에 맞춤 */
  height: 200px; /* 이미지 높이 */
  border-radius: 12px; /* 둥근 모서리 */
  overflow: hidden; /* 이미지가 컨테이너를 벗어나지 않도록 설정 */
  margin-top: 16px; /* 컨테이너 간격 */
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;