import React from 'react';
import { Button, TouchableOpacity, Linking } from 'react-native';
import { Container, Text, Logo, Google, Kakao } from '../../styles/pages/JoinPageStyles';
import { JoinPageNavigationProp } from '../../types/navigation';

type Props = {
  navigation: JoinPageNavigationProp;
};

const KAKAO_LOGIN_URL = 'http://152.67.209.153:8080/api/v1/oauth2/authorization/kakao';

export default function JoinPage({ navigation }: Props) {
  const handleKakaoLogin = async () => {
    try {
      // URL 열기
      const supported = await Linking.canOpenURL(KAKAO_LOGIN_URL);
      if (supported) {
        await Linking.openURL(KAKAO_LOGIN_URL);
        navigation.navigate('Home');
      } else {
        console.error('URL을 열 수 없습니다:', KAKAO_LOGIN_URL);
      }
    } catch (err) {
      console.error('카카오 로그인 에러:', err);
    }
  };

  return (
    <Container>
      <Logo source={require('../../asset/images/title.png')} />
      <Text>"여행, 아이신나와 함께 신나게!"</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Google source={require('../../asset/images/google.png')} />
      {/* 카카오 로그인 버튼 */}
      <TouchableOpacity onPress={handleKakaoLogin}>
        <Kakao source={require('../../asset/images/kakao.png')} />
      </TouchableOpacity>
    </Container>
  );
}