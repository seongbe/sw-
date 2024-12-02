import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';



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

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  align-items: center;
  elevation: 10; /* Android 그림자 */
  shadow-color: #000; /* iOS 그림자 색상 */
 
  shadow-opacity: 0.25; /* iOS 그림자 투명도 */
  shadow-radius: 4px; /* iOS 그림자 반경 */
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
  text-align: center;
`;

export const ModalSubtitle = styled.Text`
  font-size: 14px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CancelButton = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
  margin-right: 5px;
  background-color: #ccc;
  border-radius: 8px;
  align-items: center;
`;

export const ConfirmButton = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
  margin-left: 5px;
  background-color: #0D8C99;
  border-radius: 8px;
  align-items: center;
`;

export const CancelText = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const ConfirmText = styled.Text`
  color: #fff;
  font-size: 16px;
`;