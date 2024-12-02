import React from 'react';
import * as S from '../styles/components/RecommendCardStyles';

interface RecommendCardProps {
  image: any; // 로컬 이미지를 require로 사용하므로 any 타입으로 지정
  title: string;
  subtitle: string;
  rating: number;
  price: string;
}

const RecommendCard: React.FC<RecommendCardProps> = ({ image, title, subtitle, rating, price }) => {
  return (
    <S.RecommendCard>
      <S.ImageContainer source={image} />
      <S.CardTextContainer>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardSubtitle>{subtitle}</S.CardSubtitle>
        <S.RatingContainer>
          <S.Star>⭐</S.Star>
          <S.RatingText>{rating}</S.RatingText>
        </S.RatingContainer>
        <S.PriceText>{price}</S.PriceText>
      </S.CardTextContainer>
    </S.RecommendCard>
  );
};

export default RecommendCard;