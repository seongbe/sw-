 import styled from 'styled-components/native';
 import { View } from 'react-native';
 

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

 
export const StyledContainer = styled(View)<{ width?: string; height?: string; margin?: string }>`
background-color: #ffffff;
width: ${({ width }) => width || '100%'};
height: ${({ height }) => height || 'auto'};
margin: ${({ margin }) => margin || '0px'};
justify-content: center;
border-radius: 10px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
padding: 5%;
margin-top: 10%;
`;

export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  justify-content: flex-start;  
`;

export const ColmunContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%; /* 이미지와 간격 설정 */
`;

export const DateText = styled.Text`
color: var(--Light-Sub-Text-Color, #7D848D);
font-family: "Pragati Narrow";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 123.077% */
letter-spacing: 0.3px;
margin-bottom: 5px;
margin-top: 5px;
`;

export const LocationText = styled.Text`
color: var(--Light-Text-Color, #1B1E28);
font-family: "Pragati Narrow";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
letter-spacing: 0.5px;
`;