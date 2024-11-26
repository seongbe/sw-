// styles/HomeScreenStyles.ts
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
 
  background-color: #fff;
`;

const Text = styled.Text`
  margin-top: 30px;
  font-size: 20px;
`;

const Logo = styled.Image`
  width: 230px;
  height: 100px;
  margin-top: 150px;
`;

const Google = styled.Image`
  width: 330px;
  height: 50px;
  margin-top: 150px;
`;

const Kakao = styled.Image`
  width: 330px;
  height: 50px;
  margin-top: 10px;
`;

export { Container, Text, Logo, Google, Kakao };
