import React, { useState } from 'react';
import BackGround from '../../component/BackGround';
import * as S from '../../styles/pages/SettingStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Modal } from 'react-native';

export default function Setting() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // 네비게이션 객체
  const [isModalVisible, setModalVisible] = useState(false); // 모달 상태

  return (
    <BackGround>
      <S.MenuListContainer>
        {/* 로그아웃 메뉴 */}
        <S.MenuItem onPress={() => navigation.navigate('Join')}>
          <S.MenuIcon source={require('../../asset/icons/star.png')} />
          <S.MenuText>로그아웃</S.MenuText>
        </S.MenuItem>

        {/* 회원탈퇴 메뉴 */}
        <S.MenuItem onPress={() => setModalVisible(true)}>
          <S.MenuIcon source={require('../../asset/icons/star.png')} />
          <S.MenuText>회원탈퇴</S.MenuText>
        </S.MenuItem>
      </S.MenuListContainer>

      {/* 회원탈퇴 모달 */}
      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)} // 뒤로가기 시 모달 닫기
      >
        <S.ModalOverlay>
          <S.ModalContainer>
            <S.ModalTitle>정말로 회원탈퇴 하시겠습니까?</S.ModalTitle>
            <S.ModalSubtitle>탈퇴 시 모든 데이터가 삭제됩니다.</S.ModalSubtitle>

            <S.ButtonGroup>
              <S.CancelButton onPress={() => setModalVisible(false)}>
                <S.CancelText>취소</S.CancelText>
              </S.CancelButton>

              <S.ConfirmButton
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Join'); // 탈퇴 후 로그인 페이지로 이동
                  console.log('회원탈퇴 처리');
                  // TODO: 회원탈퇴 API 호출 추가
                }}
              >
                <S.ConfirmText>회원탈퇴</S.ConfirmText>
              </S.ConfirmButton>
            </S.ButtonGroup>
          </S.ModalContainer>
        </S.ModalOverlay>
      </Modal>
    </BackGround>
  );
}