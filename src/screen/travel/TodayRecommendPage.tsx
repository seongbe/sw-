import React from 'react'
import BackGround from '../../component/BackGround'
import * as S from '../../styles/pages/TodayRecommendStyles';
import RecommendCard from '../../component/RecommendCard';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 

function TodayRecommendPage() {
  const navigation = useNavigation()
  return (
    <ScrollView style={{ flex: 1 }}>
    <BackGround>
      <S.ItemContainer>
      <S.HeaderContainer>
            <S.Text>AI 여행지 추천</S.Text>
            <S.BackButton onPress={() => navigation.goBack()}>
              <S.BackButtonText>←</S.BackButtonText> {/* 뒤로가기 화살표 */}
            </S.BackButton>
          </S.HeaderContainer>

    <S.RowContainer>
    <RecommendCard
          image={require('../../asset/images/Contry/Home1.png')} // 로컬 이미지
          title="Niladri Reservoir"
          subtitle="Tekergat, Sunamgnj"
          rating={4.7}
          price="$459/Person"
        />

        {/* 두 번째 카드 - 로컬 이미지 */}
        <RecommendCard
          image={require('../../asset/images/Contry/Home2.png')} // 다른 로컬 이미지
          title="Beautiful Beach"
          subtitle="Cox's Bazar"
          rating={4.9}
          price="$299/Person"
        />
        </S.RowContainer>

        <S.RowContainer>
    <RecommendCard
          image={require('../../asset/images/Contry/Home3.png')} // 로컬 이미지
          title="Niladri Reservoir"
          subtitle="Tekergat, Sunamgnj"
          rating={4.7}
          price="$459/Person"
        />

        {/* 두 번째 카드 - 로컬 이미지 */}
        <RecommendCard
          image={require('../../asset/images/Contry/Home4.png')} // 다른 로컬 이미지
          title="Beautiful Beach"
          subtitle="Cox's Bazar"
          rating={4.9}
          price="$299/Person"
        />
        </S.RowContainer>



        <S.RowContainer>
    <RecommendCard
          image={require('../../asset/images/Contry/Home1.png')} // 로컬 이미지
          title="Niladri Reservoir"
          subtitle="Tekergat, Sunamgnj"
          rating={4.7}
          price="$459/Person"
        />

        {/* 두 번째 카드 - 로컬 이미지 */}
        <RecommendCard
          image={require('../../asset/images/Contry/Home2.png')} // 다른 로컬 이미지
          title="Beautiful Beach"
          subtitle="Cox's Bazar"
          rating={4.9}
          price="$299/Person"
        />
        </S.RowContainer>
    </S.ItemContainer>
    </BackGround>
    </ScrollView>
  )
}

export default TodayRecommendPage