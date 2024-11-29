import React, { useState } from 'react';
import * as S from '../../styles/pages/AiPageStyles'; // 스타일 모듈

const AiChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: '무엇이든 물어보세요!', type: 'received' },
     
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: inputText, type: 'sent' },
    ]);
    setInputText('');
  };

  return (
    <S.Container>
      {/* 메시지 리스트 */}
      <S.ChatList>
        {messages.map((message) => (
          <React.Fragment key={message.id}>
            {message.type === 'received' ? (
              <S.MessageBubbleLeft>
                <S.MessageText>{message.text}</S.MessageText>
              </S.MessageBubbleLeft>
            ) : (
              <S.MessageBubbleRight>
                <S.MessageText>{message.text}</S.MessageText>
              </S.MessageBubbleRight>
            )}
          </React.Fragment>
        ))}
      </S.ChatList>

      {/* 입력창 */}
      <S.InputContainer>
        <S.TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
        />
        <S.SendButton onPress={sendMessage}>
          <S.SendButtonText>Send</S.SendButtonText>
        </S.SendButton>
      </S.InputContainer>
    </S.Container>
  );
};

export default AiChatPage;