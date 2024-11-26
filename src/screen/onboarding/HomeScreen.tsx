// screens/HomeScreen.tsx
import React from 'react';
import { Container, Logo, Text } from '../../styles/components/HomeScreenStyles';
import ButtonComponent from '../../component/ButtonComponent';
import { MainPageNavigationProp } from '../../types/navigation';
 


type Props = {
  navigation: MainPageNavigationProp;
};
export default function HomeScreen({ navigation }: Props) {
  return (
    <Container>
      <Logo source={require('../../asset/images/title.png')} />
      <Text>아이신나면 여행이{'\n'} 더 즐거워집니다.</Text>
      <ButtonComponent
        title="시작하기"
        width="190px"
        height="60px"
        onPress={() => navigation.navigate('Main')}
      />
    </Container>
  );
}
