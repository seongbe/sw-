import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  align-self: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
   height: 80%;
  elevation: 5;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageStyled = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

export const LikeButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #0D8C99;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 5px;
  align-self: center;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;