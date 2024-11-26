import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconButtonProps = {
  iconName: string;
  label: string;
  onPress?: () => void;
};

export const IconButton = ({ iconName, label, onPress }: IconButtonProps) => (
  <Container onPress={onPress}>
    <IconBackground>
      <Icon name={iconName} size={24} color="#3e5e53" />
    </IconBackground>
    <IconLabel>{label}</IconLabel>
  </Container>
);

const Container = styled.TouchableOpacity`
  align-items: center;
  margin: 10px;
`;

const IconBackground = styled.View`
  background-color: #cde5e4;
  border-radius: 50px;
  padding: 15px;
  margin-bottom: 5px;
`;

const IconLabel = styled.Text`
  font-size: 14px;
  color: #3e5e53;
`;