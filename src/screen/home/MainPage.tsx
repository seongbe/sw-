// src/screen/home/MainPage.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import BackGround from '../../component/BackGround';
import ContainerComponent from '../../component/ContainerComponent';
import ButtonComponent from '../../component/ButtonComponent';
import { RecommendPageNavigationProp } from '../../types/navigation';
import * as S from '../../styles/pages/MainPageStyles';
 import TicketComponent from '../../component/TicketComponent';

type Props = {
  navigation: RecommendPageNavigationProp;
};
 
 

export default function MainPage({ navigation }: Props) {

 
  return (
    <ScrollView style={{ flex: 1 }}>
      <BackGround>
       
        <TicketComponent
        status="다가오는"
        date="12월 24일 2024"
        departure="인천"
        departureTime="05:30"
        arrival="제주도"
        arrivalTime="06:30"
        duration="1h 30m"
        tags={['자연', '여유로운', '즉흥적인']}
        passengers="성인 2"
        onPress={() => navigation.navigate('MyTravel')}
      />
       
        <S.Text>할인중인 여행(광고)</S.Text>
        <S.HorizontalScrollContainer horizontal showsHorizontalScrollIndicator={false}>
          <S.ItemContainer>
            <ContainerComponent width="150px" height="200px">
              <Text>두 번째 컨테이너 1</Text>
            </ContainerComponent>
          </S.ItemContainer>
          <S.ItemContainer>
            <ContainerComponent width="150px" height="200px">
              <Text>두 번째 컨테이너 2</Text>
            </ContainerComponent>
          </S.ItemContainer>
          <S.ItemContainer>
            <ContainerComponent width="150px" height="200px">
              <Text>두 번째 컨테이너 3</Text>
            </ContainerComponent>
          </S.ItemContainer>
        </S.HorizontalScrollContainer>

        <S.Text>오늘의 특가 숙소(광고)</S.Text>
        <ContainerComponent width="90%" height="100px" margin="20px">
          <Text>세 번째 컨테이너</Text>
        </ContainerComponent>

        <S.Text>오늘의 추천 여행지(gpt)</S.Text>
        <S.HorizontalScrollContainer horizontal showsHorizontalScrollIndicator={false}>
          <S.ItemContainer>
            <ContainerComponent width="160px" height="200px">
              <Text>두 번째 컨테이너 1</Text>
            </ContainerComponent>
          </S.ItemContainer>
          <S.ItemContainer>
            <ContainerComponent width="160px" height="200px">
              <Text>두 번째 컨테이너 2</Text>
            </ContainerComponent>
          </S.ItemContainer>
          <S.ItemContainer>
            <ContainerComponent width="160px" height="200px">
              <Text>두 번째 컨테이너 3</Text>
            </ContainerComponent>
          </S.ItemContainer>
        </S.HorizontalScrollContainer>
        <S.CenteredContainer>
          <ButtonComponent
            title="여행지 추천받기"
            width="330px"
            height="60px"
            onPress={() => navigation.navigate('Recommend')}
          />
        </S.CenteredContainer>
      </BackGround>
    </ScrollView>
  );
}