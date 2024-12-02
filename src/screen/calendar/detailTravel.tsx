import React from 'react';
import { TouchableOpacity, Text } from 'react-native'; // TouchableOpacity 추가
import { useNavigation } from '@react-navigation/native'; // useNavigation 추가
import * as S from '../../styles/pages/DetailTravelStyles'; 
import BackGround from '../../component/BackGround';

function DetailTravel() {
  const navigation = useNavigation(); // 네비게이션 훅 사용

  return (
    <BackGround>
      <S.MainContainer>
        {/* 뒤로 가기 버튼 */}
        <TouchableOpacity
          style={{ padding: 10, marginBottom: 16 }} // 버튼 스타일 설정
          onPress={() => navigation.goBack()} // 뒤로가기 기능
        >
          <Text style={{ fontSize: 16, color: '#007aff' }}>← Back</Text>
        </TouchableOpacity>

        <S.Text>dotonbori river</S.Text>
        <S.SmallText>tekergat, Sunamgni</S.SmallText>
        <S.RowContainer>
          <S.SmallText>🌐 Osaka</S.SmallText>
          <S.SmallText>⭐ 4.7</S.SmallText>
          <S.SmallText>#59</S.SmallText>
        </S.RowContainer>
        <S.RowContainer>
        <S.ImageContainer>
          <S.StyledImage source={require('../../asset/images/Detail/1.png')} />
        </S.ImageContainer>
        <S.ImageContainer>
          <S.StyledImage source={require('../../asset/images/Detail/2.png')} />
        </S.ImageContainer>
        <S.ImageContainer>
          <S.StyledImage source={require('../../asset/images/Detail/3.png')} />
        </S.ImageContainer>
        <S.ImageContainer>
          <S.StyledImage source={require('../../asset/images/Detail/4.png')} />
        </S.ImageContainer>
        <S.ImageContainer>
          <S.StyledImage source={require('../../asset/images/Detail/1.png')} />
        </S.ImageContainer>
        </S.RowContainer>
        <S.BottomText>관광지 설명</S.BottomText>
        <S.SmallText>도톤보리(道頓堀, Dotonbori)는 일본 오사카의 대표적인 관광지로, 특히 이곳을 흐르는 도톤보리 강은 활기찬 분위기와 다양한 먹거리로 유명합니다. 도톤보리는 원래 17세기에 상업과 문화의 중심지로 개발되었고, 현재는 오사카를 찾는 관광객들에게 필수 방문지로 자리 잡았습니다.</S.SmallText>
      </S.MainContainer>
    </BackGround>
  );
}

export default DetailTravel;