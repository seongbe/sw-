 import styled from 'styled-components/native';

export const Text = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;