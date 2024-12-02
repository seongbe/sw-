import React from 'react';
import BackGround from '../../component/BackGround';
import * as S from '../../styles/pages/MyPageStyles'; 
import { useNavigation } from '@react-navigation/native'; // useNavigation 추가
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation'; // 네비게이션 타입 정의

export default function MyPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // 네비게이션 객체 가져오기

  return (
    <BackGround>
      <S.ProfileContainer>
        <S.ProfileImage source={require('../../asset/images/profil.png')} />
        <S.UserName>신난다</S.UserName>
        <S.UserEmail>aisinna@skuniv.ac.kr</S.UserEmail>
      </S.ProfileContainer>

      <S.MenuListContainer>
        {/* 저장 여행지 메뉴 */}
        <S.MenuItem
          onPress={() => navigation.navigate('SaveTravel')} // SaveTravel로 이동
        >
          <S.MenuIcon source={require('../../asset/icons/star.png')} />
          <S.MenuText>저장 여행지</S.MenuText>
        </S.MenuItem>

        <S.MenuItem>
          <S.MenuIcon source={require('../../asset/icons/star.png')} />
          <S.MenuText>내 위치</S.MenuText>
        </S.MenuItem>
        <S.MenuItem
         onPress={() => navigation.navigate('Setting')}>
          <S.MenuIcon source={require('../../asset/icons/star.png')} />
          <S.MenuText>설정</S.MenuText>
        </S.MenuItem>
        <S.MenuItem
        onPress={() => navigation.navigate('TravelReview')}>
          <S.MenuIcon source={require('../../asset/icons/star.png')} />
          <S.MenuText>여행 후기 남기기</S.MenuText>
        </S.MenuItem>
      </S.MenuListContainer>
    </BackGround>
  );
}