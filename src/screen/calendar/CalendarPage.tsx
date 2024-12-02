import React from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars'; 
import { useNavigation } from '@react-navigation/native';
import * as S from '../../styles/pages/CalendarStyles'; 
import BackGround from '../../component/BackGround';
import ButtonComponent from '../../component/ButtonComponent';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

const CalendarPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BackGround>
        <S.Container>
          <Calendar
            style={styles.calendar}
            theme={{
              selectedDayBackgroundColor: '#007aff',
              todayTextColor: '#007aff',
              arrowColor: '#007aff',
            }}
            onDayPress={(day) => {
              console.log('Selected day:', day);
            }}
          />
 
 <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('DetailTravel')}
          >
            <S.StyledContainer width="335px" height="100px">
              <S.RowContainer>
                <S.ImageContainer>
                  <Image source={require('../../asset/images/Contry/Japan.png')} />
                </S.ImageContainer>
                <S.ColmunContainer>
                  <S.DateText>{currentDate}</S.DateText>
                  <S.LocationText>일본 오사카</S.LocationText>
                  <S.DateText>Osaka | Dotonbori River</S.DateText>
                </S.ColmunContainer>
              </S.RowContainer>
            </S.StyledContainer>
          </TouchableOpacity>

          {/* 두 번째 카드 */}
          <S.StyledContainer width="335px" height="100px">
            <S.RowContainer>
              <S.ImageContainer>
                <Image source={require('../../asset/images/Contry/Paris.png')} />
              </S.ImageContainer>
              <S.ColmunContainer>
                <S.DateText>{currentDate}</S.DateText>
                <S.LocationText>프랑스 파리</S.LocationText>
                <S.DateText>Paris | Eiffel Tower</S.DateText>
              </S.ColmunContainer>
            </S.RowContainer>
          </S.StyledContainer>

          {/* 세 번째 카드 */}
          <S.StyledContainer width="335px" height="100px">
            <S.RowContainer>
              <S.ImageContainer>
                <Image source={require('../../asset/images/Contry/London.png')} />
              </S.ImageContainer>
              <S.ColmunContainer>
                <S.DateText>{currentDate}</S.DateText>
                <S.LocationText>영국 런던</S.LocationText>
                <S.DateText>London | Tottenhum</S.DateText>
              </S.ColmunContainer>
            </S.RowContainer>
          </S.StyledContainer>
        </S.Container>

        <ButtonComponent
          title="인기 여행지 추천받기"
          width="330px"
          height="60px"
        />
      </BackGround>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    margin: 10,
  },
});

export default CalendarPage;