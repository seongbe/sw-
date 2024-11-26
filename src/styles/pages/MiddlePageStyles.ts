import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Section = styled.View`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 15px;
`;

export const CardText = styled.Text`
  font-size: 16px;
`;