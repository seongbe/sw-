import React, { useState } from 'react';
import * as S from '../../styles/pages/SaveTravel'; 
import BackGround from '../../component/BackGround';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import RecommendCard from '../../component/RecommendCard';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // 아이콘 추가

const SaveTravel = () => {
  const navigation = useNavigation();
  const [isGrid, setIsGrid] = useState(true); // 초기값: 그리드 모드

  return (
    <ScrollView style={{ flex: 1 }}>
      <BackGround>
        <S.MainContainer>
          {/* 뒤로가기 버튼 */}
          <TouchableOpacity
            style={{
              padding: 10,
              marginBottom: 16,
            }}
            onPress={() => navigation.goBack()} // 뒤로가기 기능
          >
            <Text style={{ fontSize: 16, color: '#007aff' }}>← Back</Text>
          </TouchableOpacity>

          {/* 제목 및 두 개 아이콘 */}
          <S.TitleRow>
            <S.MenuText>저장된 여행지</S.MenuText>
            <S.IconContainer>
              {/* 그리드 아이콘 */}
              <TouchableOpacity onPress={() => setIsGrid(true)}>
                <Icon
                  name="grid-view"
                  size={24}
                  color={isGrid ? '#007aff' : '#ccc'} // 선택 여부에 따른 색상 변경
                />
              </TouchableOpacity>

              {/* 리스트 아이콘 */}
              <TouchableOpacity onPress={() => setIsGrid(false)}>
                <Icon
                  name="view-list"
                  size={24}
                  color={!isGrid ? '#007aff' : '#ccc'} // 선택 여부에 따른 색상 변경
                />
              </TouchableOpacity>
            </S.IconContainer>
          </S.TitleRow>

          {/* 카드 리스트 */}
          {isGrid ? (
  <>
    <S.RowContainer>
      <RecommendCard
        image={require('../../asset/images/Contry/Home1.png')}
        title="Niladri Reservoir"
        subtitle="Tekergat, Sunamgnj"
        rating={4.7}
        price="$459/Person"
      />

      <RecommendCard
        image={require('../../asset/images/Contry/Home2.png')}
        title="Beautiful Beach"
        subtitle="Cox's Bazar"
        rating={4.9}
        price="$299/Person"
      />
    </S.RowContainer>

    <S.RowContainer>
      <RecommendCard
        image={require('../../asset/images/Contry/Home3.png')}
        title="Hill Top View"
        subtitle="Bandarban"
        rating={4.8}
        price="$399/Person"
      />

      <RecommendCard
        image={require('../../asset/images/Contry/Home4.png')}
        title="Sunny Beach"
        subtitle="Kuakata"
        rating={4.5}
        price="$289/Person"
      />
    </S.RowContainer>

    <S.RowContainer>
      <RecommendCard
        image={require('../../asset/images/Contry/Home1.png')}
        title="Mountain Cabin"
        subtitle="Sajek Valley"
        rating={4.6}
        price="$499/Person"
      />

      <RecommendCard
        image={require('../../asset/images/Contry/Home2.png')}
        title="Peaceful Lake"
        subtitle="Tanguar Haor"
        rating={4.9}
        price="$359/Person"
      />
    </S.RowContainer>
  </>
) : (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <S.RowContainer>
      <RecommendCard
        image={require('../../asset/images/Contry/Home1.png')}
        title="Niladri Reservoir"
        subtitle="Tekergat, Sunamgnj"
        rating={4.7}
        price="$459/Person"
      />

      <RecommendCard
        image={require('../../asset/images/Contry/Home2.png')}
        title="Beautiful Beach"
        subtitle="Cox's Bazar"
        rating={4.9}
        price="$299/Person"
      />

      <RecommendCard
        image={require('../../asset/images/Contry/Home1.png')}
        title="Hill Top View"
        subtitle="Bandarban"
        rating={4.8}
        price="$399/Person"
      />

      <RecommendCard
        image={require('../../asset/images/Contry/Home2.png')}
        title="Sunny Beach"
        subtitle="Kuakata"
        rating={4.5}
        price="$289/Person"
      />
    </S.RowContainer>
  </ScrollView>
)}
        </S.MainContainer>
      </BackGround>
    </ScrollView>
  );
};

export default SaveTravel;