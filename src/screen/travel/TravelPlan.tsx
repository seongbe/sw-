import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

// 네비게이션 타입 정의
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TravelPlan'>;

const TravelPlan = () => {
  const navigation = useNavigation<NavigationProp>();

  const data = [
    { time: '09:00', title: '출발', description: '집에서 출발', icon: require('../../asset/icons/directions_bus.png') },
    { time: '10:00', title: '여행지 1', description: '멋진 풍경 감상', icon: require('../../asset/icons/directions_walk.png') },
    { time: '12:00', title: '점심', description: '현지 음식 맛보기', icon: require('../../asset/icons/directions_bus.png') },
    { time: '14:00', title: '여행지 2', description: '기념품 쇼핑', icon: require('../../asset/icons/local_taxi.png') },
    { time: '17:00', title: '귀가', description: '집으로 돌아가기', icon: require('../../asset/icons/local_taxi.png') },
  ];

  return (
    <View style={styles.container}>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.navigate('Main')}
      >
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.backButtonText}>뒤로가기</Text>
      </TouchableOpacity>

      {/* 타임라인 */}
      <Timeline
        data={data}
        circleSize={20}
        circleColor="#6EB1F7"
        lineColor="#6EB1F7"
        timeContainerStyle={{ minWidth: 52, marginTop: 5 }}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#FFECB3',
          color: '#000',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{ color: 'gray' }}
        innerCircle={'icon'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f3f3',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#000',
  },
});

export default TravelPlan;