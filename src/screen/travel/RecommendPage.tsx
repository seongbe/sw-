import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import RecommendationContainer from '../../component/RecommendContainer';
import { useNavigation } from '@react-navigation/native';
import { RecommendPageNavigationProp } from '../../types/navigation'; 

const RecommendPage = memo(() => {
  const navigation = useNavigation<RecommendPageNavigationProp>(); // 타입 명시

   

  const handleBack = () => {
    navigation.navigate('Main');
  };

  const handleSave = () => {
    console.log('저장하기 버튼 클릭');
  };

  return (
    <View style={styles.pageContainer}>
      <RecommendationContainer
         imageSource={require('../../asset/images/travelexample.png')}// 예시 이미지 URL
        title="추천 여행지 제목"
        description="이곳은 정말 멋진 여행지입니다. 한 번 방문해 보세요!"
        onBack={handleBack} // 뒤로 가기 동작
        onSave={handleSave} // 저장하기 동작
        
      />
    </View>
  );
});

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default RecommendPage;