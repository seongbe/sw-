import React from 'react';
import BackGround from '../../component/BackGround';
import * as S from '../../styles/pages/MyTravelPageStyles';

const MyTravelPage = () => {
  return (
    <BackGround>
     <S.TravelList>
     <S.Text>여수</S.Text>
     <S.TravelContainer source={require('../../asset/images/travel.png')}>
          <S.Text>첫 번째 이미지</S.Text>
        </S.TravelContainer>

        <S.TravelContainer source={require('../../asset/images/travel.png')}>
          <S.Text>첫 번째 이미지</S.Text>
        </S.TravelContainer>

        <S.TravelContainer source={require('../../asset/images/travel.png')}>
          <S.Text>첫 번째 이미지</S.Text>
        </S.TravelContainer>
     
     
     
 
     </S.TravelList>
    </BackGround>
  );
};
 
export default MyTravelPage;