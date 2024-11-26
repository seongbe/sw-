import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainPage from '../screen/home/MainPage';
import MyTravelPage from '../screen/home/MyTravelPage';
import CalendarPage from '../screen/calendar/CalendarPage';
import { BottomTabParamList } from '../types/navigation'; // 타입 import

const Tab = createBottomTabNavigator<BottomTabParamList>(); // BottomTabParamList 타입 적용

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
    </Tab.Navigator>
  );
}