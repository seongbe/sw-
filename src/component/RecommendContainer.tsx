import React, { useState } from 'react';
import { Container, BackButton, ImageStyled, Title, Description, LikeButton, SaveButton, SaveButtonText } from '../styles/components/RecommendContainerstyled';
import Icon from 'react-native-vector-icons/MaterialIcons'; // MaterialIcons 사용

type RecommendationContainerProps = {
  imageSource: any; // 로컬 이미지 소스
  title: string;
  description: string;
  onBack: () => void;
  onSave: () => void;
};

const RecommendationContainer: React.FC<RecommendationContainerProps> = ({
  imageSource,
  title,
  description,
  onBack,
  onSave,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <Container>
      {/* 뒤로 가기 버튼 */}
      <BackButton onPress={onBack}>
        <Icon name="arrow-back" size={24} color="black" />
      </BackButton>

      {/* 추천 이미지 */}
      <ImageStyled source={imageSource} />

      {/* 추천 제목 */}
      <Title>{title}</Title>

      {/* 추천 설명 */}
      <Description>{description}</Description>

      {/* 좋아요 버튼 */}
      <LikeButton onPress={handleLike}>
        <Icon name={liked ? 'favorite' : 'favorite-border'} size={24} color={liked ? 'red' : 'black'} />
      </LikeButton>

      {/* 저장하기 버튼 */}
      <SaveButton onPress={onSave}>
        <SaveButtonText>저장하기</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default RecommendationContainer;