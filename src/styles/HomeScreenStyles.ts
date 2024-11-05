// styles/HomeScreenStyles.ts
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
   
  background-color: #fff;
`;

const Text = styled.Text`
  margin-top: 30px;
  font-size: 35px;
    color: #0D8C99;
    font-weight: bold; /* 글씨체를 두껍게 */
  text-align: center; /* 텍스트를 중앙 정렬 */
`;

const Logo = styled.Image`
  width: 230px;
  height: 100px;
  margin-top: 150px;
`;

export { Container, Text, Logo };
