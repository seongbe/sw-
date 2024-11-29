import styled from 'styled-components/native';

// 전체 화면 컨테이너
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

// 메시지 리스트가 스크롤 가능하도록 설정
export const ChatList = styled.ScrollView`
  flex: 1;
  margin-bottom: 20px; /* 입력창과의 간격 */
`;

// 말풍선 스타일: 왼쪽 (상대방 메시지)
export const MessageBubbleLeft = styled.View`
  max-width: 70%;
  background-color: #e0e0e0;
  padding: 10px 15px;
  border-radius: 15px;
  align-self: flex-start;
  margin-bottom: 10px;
`;

// 말풍선 스타일: 오른쪽 (내 메시지)
export const MessageBubbleRight = styled.View`
  max-width: 70%;
  background-color: #4caf50;
  padding: 10px 15px;
  border-radius: 15px;
  align-self: flex-end;
  margin-bottom: 10px;
`;

// 말풍선 내부 텍스트 스타일
export const MessageText = styled.Text`
  color: ${({ theme }) => theme.colors.text || '#000'};
  font-size: ${({ theme }) => theme.fontSize.small || '14px'};
`;

// 입력창 컨테이너
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

// 텍스트 입력 스타일
export const TextInput = styled.TextInput`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.fontSize.medium || '16px'};
  color: ${({ theme }) => theme.colors.text || '#000'};
`;

// 전송 버튼 스타일
export const SendButton = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 10px;
  background-color: #0d8c99;
  border-radius: 20px;
`;
export const SendButtonText = styled.Text`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.medium || '16px'};
  font-weight: bold;
`;