import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars'; // react-native-calendars import
import * as S from '../../styles/pages/CalendarStyles'; // 스타일 모듈
import { ScrollView } from 'react-native';
import BackGround from '../../component/BackGround';
import ButtonComponent from '../../component/ButtonComponent';

const CalendarPage = () => {

  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      <BackGround>
    <S.Container>
      
      <Calendar
        style={styles.calendar}
        // 기본 스타일 외에 커스터마이징 추가 가능
        theme={{
          selectedDayBackgroundColor: '#007aff',
          todayTextColor: '#007aff',
          arrowColor: '#007aff',
        }}
        // 날짜 선택 시 이벤트 추가 가능
        onDayPress={(day) => {
          console.log('Selected day:', day);
        }}
      />
      <S.StyledContainer
      width='335px'
      height='100px'>
      <S.RowContainer>
      <S.ImageContainer>
      <Image source={require('../../asset/images/Contry/Japan.png')}  />
     
      </S.ImageContainer>
      <S.ColmunContainer>
      <S.DateText>{currentDate}</S.DateText>
      <S.LocationText>일본 오사카</S.LocationText>
      <S.DateText>Osaka | Dotonbori River</S.DateText>
      </S.ColmunContainer>
      </S.RowContainer>
      </S.StyledContainer>

      <S.StyledContainer
      width='335px'
      height='100px'>
      <S.RowContainer>
      <S.ImageContainer>
      <Image source={require('../../asset/images/Contry/Paris.png')}  />
     
      </S.ImageContainer>
      <S.ColmunContainer>
      <S.DateText>{currentDate}</S.DateText>
      <S.LocationText>프랑스 파리</S.LocationText>
      <S.DateText>Paris | Eiffel Tower</S.DateText>
      </S.ColmunContainer>
      </S.RowContainer>
      </S.StyledContainer>

      <S.StyledContainer
      width='335px'
      height='100px'>
      <S.RowContainer>
      <S.ImageContainer>
      <Image source={require('../../asset/images/Contry/London.png')}  />
     
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