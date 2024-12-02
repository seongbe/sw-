import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainPage from '../screen/home/MainPage';
import MyTravelPage from '../screen/home/MyTravelPage';
import CalendarPage from '../screen/calendar/CalendarPage';
import AiChatPage from '../screen/home/AiChatPage';
import MyPage from '../screen/mypage/MyPage';
import { BottomTabParamList } from '../types/navigation';  
 
const Tab = createBottomTabNavigator<BottomTabParamList>();  

export default function BottomTabNavigation() {
   
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === 'HomeTab'
              ? 'home'
              : route.name === 'MyTravel'
              ? 'flight'
              : route.name === 'Calendar'
              ? 'calendar-today'
              : route.name === 'AiChatPage'
              ? 'chat'
              : route.name === 'MyPage'
              ? 'person' // MyPage 아이콘 설정
              : '';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007aff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="HomeTab" component={MainPage} options={{ title: '홈' }} />
      <Tab.Screen name="MyTravel" component={MyTravelPage} options={{ title: '나의 여행' }} />
      <Tab.Screen name="Calendar" component={CalendarPage} options={{ title: '캘린더' }} />
      <Tab.Screen name="AiChatPage" component={AiChatPage} options={{ title: 'AI 채팅' }} />
      <Tab.Screen name="MyPage" component={MyPage} options={{ title: '마이페이지' }} />
    </Tab.Navigator>
   
  );
}