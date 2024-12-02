import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 16px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const UserEmail = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const MenuListContainer = styled.View`
  margin-top: 30px;
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;

  &:last-child {
    border-bottom-width: 0;
  }
`;

export const MenuIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const MenuText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;