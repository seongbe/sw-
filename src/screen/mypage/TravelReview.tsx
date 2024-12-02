import React, { useState } from 'react';
import * as S from '../../styles/pages/TravelReview';
import BackGround from '../../component/BackGround';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // 아이콘 추가
import ButtonComponent from '../../component/ButtonComponent';

const TravelReview = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0); // 별점 상태 (0~5)
  const [inputValue, setInputValue] = useState('');
  const handleStarPress = (index: number) => {
    setRating(index + 1); // 별점 업데이트 (index는 0부터 시작하므로 +1)
  };

  return (
    <BackGround>
      {/* 뒤로가기 버튼 */}
      <TouchableOpacity
        style={{
          padding: 10,
          marginBottom: 16,
        }}
        onPress={() => navigation.goBack()} // 뒤로가기 기능 추가
      >
        <Text style={{ fontSize: 16, color: '#007aff' }}>← Back</Text>
      </TouchableOpacity>

      <S.HeaderContainer>
        <S.Text>여행 후 기분은 어떠신가요?</S.Text>
      </S.HeaderContainer>

      <S.RowContainer>
        <S.StyledContainer width="100px" height="100px"></S.StyledContainer>
        <S.StyledContainer width="100px" height="100px"></S.StyledContainer>
        <S.StyledContainer width="100px" height="100px"></S.StyledContainer>
      </S.RowContainer>

      <S.HeaderContainer>
        <S.Text>참여도를 평가해주세요</S.Text>
      </S.HeaderContainer>

      {/* 별점 UI */}
      <S.RowContainer style={{ justifyContent: 'center', marginTop: 20 }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleStarPress(index)} // 별 클릭 시 별점 업데이트
          >
            <Icon
              name={index < rating ? 'star' : 'star-border'} // 선택된 별과 비어 있는 별 구분
              size={40} // 별 크기
              color={index < rating ? '#FFD700' : '#ccc'} // 선택 여부에 따른 색상 변경
              style={{ marginHorizontal: 5 }} // 별 간격
            />
          </TouchableOpacity>
        ))}

         
      </S.RowContainer>
      <S.BottomContainer>
        <S.Text>간단한 한줄평을 남겨주세요!</S.Text>
        <S.SmallText>남겨주신 한줄평은 상대방에게만 공유됩니다.</S.SmallText>
        <S.InputBox
          placeholder="여행 후기를 입력해주세요" // 힌트 텍스트
          placeholderTextColor="#aaa" // 힌트 텍스트 색상
          value={inputValue} // 입력 값
          onChangeText={(text) => setInputValue(text)} // 입력 값 변경
        />
      </S.BottomContainer>
      <ButtonComponent
            title="후기 남기기"
            width="330px"
            height="60px"
            
          />
    </BackGround>
  );
};

export default TravelReview;