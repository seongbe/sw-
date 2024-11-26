import styled from 'styled-components/native';

export const Text = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
`;

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HorizontalScrollContainer = styled.ScrollView`
  padding-left: ${({ theme }) => theme.spacing.small};
`;

export const ItemContainer = styled.View`
  margin-right: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const IconButtonContainer = styled.TouchableOpacity`
  align-items: center;
  margin: ${({ theme }) => theme.spacing.small};
`;

export const IconBackground = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const IconLabel = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text};
`;