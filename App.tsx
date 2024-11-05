// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinPage from './src/screen/onboarding/JoinPage';
import HomeScreen from './src/screen/onboarding/HomeScreen';
import { RootStackParamList } from './src/types/navigation';
import { enableScreens } from 'react-native-screens';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Join"
      screenOptions={{
        contentStyle: { backgroundColor: '#fff' }, // 모든 화면 배경색 흰색
      }}
      >
        <Stack.Screen
          name="Join"
          component={JoinPage}
          options={{ title: 'Join Page' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
enableScreens();