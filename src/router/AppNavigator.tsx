// AppNavigator.tsx (라우터)
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/home/MainPage';
import MyTravelScreen from '../screen/home/MyTravelPage';
import RecommendPage from '../screen/travel/RecommendPage';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>(); // 타입 정의 사용

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Travel" component={MyTravelScreen} />
        <Stack.Screen name="Profile" component={MyTravelScreen} />
        <Stack.Screen name="Recommend" component={RecommendPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}