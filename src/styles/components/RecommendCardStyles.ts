import styled from 'styled-components/native';

export const RecommendCard = styled.View`
  width: 160px;
  height: 260px;
  background-color: #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 16px rgba(180, 188, 202, 0.12); /* 그림자 더 진하고 크기 키움 */
  margin-top: 10%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ImageContainer = styled.Image`
  width: 160px;
  height: 120px;
   
   
`;

export const CardTextContainer = styled.View`
  padding: 12px 16px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const CardSubtitle = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Star = styled.Text`
  font-size: 16px;
  margin-right: 4px;
`;

export const RatingText = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const PriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #007aff;
  margin-top: 12px;
`;