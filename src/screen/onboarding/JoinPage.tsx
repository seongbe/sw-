// screens/JoinPage.tsx
import React from 'react';
import { Button } from 'react-native';
import { Container, Text, Logo, Google, Kakao } from '../../styles/pages/JoinPageStyles';
import { JoinPageNavigationProp } from '../../types/navigation';

type Props = {
  navigation: JoinPageNavigationProp;
};

export default function JoinPage({ navigation }: Props) {
  return (
    <Container>
      <Logo source={require('../../asset/images/title.png')} />
      <Text>"여행, 아이신나와 함께 신나게!"</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
        <Google source={require('../../asset/images/google.png')} />
        <Kakao source={require('../../asset/images/kakao.png')} />
    </Container>
  );
}
