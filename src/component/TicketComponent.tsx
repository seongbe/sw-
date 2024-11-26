// TicketComponent.tsx
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

type TicketProps = {
  status: string;
  date: string;
  departure: string;
  departureTime: string;
  arrival: string;
  arrivalTime: string;
  duration: string;
  tags: string[];
  passengers: string;
  onPress?: () => void;
};

const TicketComponent = ({
  status,
  date,
  departure,
  departureTime,
  arrival,
  arrivalTime,
  duration,
  tags,
  passengers,
  onPress,
}: TicketProps) => {
  return (
    <TouchableContainer onPress={onPress}>
    <TicketContainer>
      <TopSection>
        <StatusBadge>
          <StatusText>{status}</StatusText>
        </StatusBadge>
        <DateText>{date}</DateText>
      </TopSection>

      <FlightInfoSection>
        <LocationContainer>
          <LocationText>{departure}</LocationText>
          <Icon name="plane" size={24} color="#333" />
          <TimeText>{departureTime}</TimeText>
        </LocationContainer>

        <DurationContainer>
          <DashLine>---------------</DashLine>
          <DurationText>{duration}</DurationText>
          <DashLine>---------------</DashLine>
        </DurationContainer>

        <LocationContainer>
          <Icon name="plane" size={24} color="#333" />
          <LocationText>{arrival}</LocationText>
          <TimeText>{arrivalTime}</TimeText>
        </LocationContainer>
      </FlightInfoSection>

      <TagsSection>
        {tags.map((tag, index) => (
          <TagText key={index}>{tag}</TagText>
        ))}
      </TagsSection>

      <PassengerInfo>
        <LabelText>인원수</LabelText>
        <PassengerCountText>{passengers}</PassengerCountText>
      </PassengerInfo>
    </TicketContainer>
    </TouchableContainer>
  );
};

// 스타일 컴포넌트 정의
const TouchableContainer = styled.TouchableOpacity`
  width: 100%;  
`;
const TicketContainer = styled.View`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 5;
  border: 1px solid #d0e3ff;
  width: 95%;
`;

const TopSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StatusBadge = styled.View`
  background-color: #4ea4b6;
  padding: 4px 10px;
  border-radius: 12px;
`;

const StatusText = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

const DateText = styled.Text`
  color: #6d7a90;
  font-size: 14px;
`;

const FlightInfoSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const LocationContainer = styled.View`
  align-items: center;
`;

const LocationText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const TimeText = styled.Text`
  color: #6d7a90;
  font-size: 12px;
`;

const DurationContainer = styled.View`
  align-items: center;
`;

const DashLine = styled.Text`
  color: #6d7a90;
  font-size: 12px;
`;

const DurationText = styled.Text`
  color: #6d7a90;
  font-size: 12px;
  margin: 5px 0;
`;

const TagsSection = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const TagText = styled.Text`
  color: #6d7a90;
  font-size: 12px;
  margin-right: 8px;
`;

const PassengerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const LabelText = styled.Text`
  color: #6d7a90;
  font-size: 14px;
`;

const PassengerCountText = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export default TicketComponent;