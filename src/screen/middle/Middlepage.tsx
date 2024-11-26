import React from 'react';
import { ScrollView } from 'react-native';
import * as S from '../../styles/pages/MiddlePageStyles'; // 스타일 파일 가져오기

export default function MiddlePage() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <S.Container>
        <S.Header>
          <S.HeaderText>헤더 영역</S.HeaderText>
        </S.Header>

        <S.Content>
          <S.Section>
            <S.SectionTitle>섹션 1</S.SectionTitle>
            <S.Card>
              <S.CardText>카드 내용</S.CardText>
            </S.Card>
          </S.Section>

          <S.Section>
            <S.SectionTitle>섹션 2</S.SectionTitle>
            <S.Card>
              <S.CardText>다른 카드 내용</S.CardText>
            </S.Card>
          </S.Section>
        </S.Content>
      </S.Container>
    </ScrollView>
  );
}