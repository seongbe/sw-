import React, { useEffect, useCallback } from 'react';
import { Button, TouchableOpacity, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Text, Logo, Google, Kakao } from '../../styles/pages/JoinPageStyles';
import { JoinPageNavigationProp } from '../../types/navigation';

type Props = {
  navigation: JoinPageNavigationProp;
};

const KAKAO_LOGIN_URL = 'http://152.67.209.153:8080/api/v1/oauth2/authorization/kakao';

export default function JoinPage({ navigation }: Props) {
  // 딥 링크 처리 함수
  const handleDeepLink = useCallback(async (event: { url: string }) => {
    const url = event.url;
    console.log('Received deep link URL:', url);

    // URL에서 토큰 추출
    const token = extractTokenFromUrl(url);
    if (token) {
      console.log('Extracted token:', token);

      // 토큰을 AsyncStorage에 저장
      await AsyncStorage.setItem('authToken', token);
      console.log('Token saved to AsyncStorage');
    } else {
      console.error('Token not found in the URL');
    }
  }, []);

  // URL에서 토큰 추출 함수
  const extractTokenFromUrl = (url: string): string | null => {
    const regex = /token=([^&]+)/; // token 파라미터 추출
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    // 딥 링크 리스너 추가
    const subscription = Linking.addEventListener('url', handleDeepLink);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      subscription.remove();
    };
  }, [handleDeepLink]);

  const handleKakaoLogin = async () => {
    try {
      // URL 열기
      const supported = await Linking.canOpenURL(KAKAO_LOGIN_URL);
      if (supported) {
        await Linking.openURL(KAKAO_LOGIN_URL);
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