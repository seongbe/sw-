import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars'; // react-native-calendars import
import * as S from '../../styles/pages/CalendarStyles'; // 스타일 모듈

const CalendarPage = () => {
  return (
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
    </S.Container>
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