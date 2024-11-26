import { enableScreens } from 'react-native-screens';
enableScreens();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinPage from './src/screen/onboarding/JoinPage';
import HomeScreen from './src/screen/onboarding/HomeScreen';
import RecommendPage from './src/screen/travel/RecommendPage';
import BottomTabNavigation from './src/navigation/BottomTabNavigationApp';
import MyTravelPage from './src/screen/home/MyTravelPage';
import { ThemeProvider } from 'styled-components';
import Theme from './src/styles/theme';
import CustomHeader from './src/component/CustomHeader';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Join"
        screenOptions={{
          contentStyle: { backgroundColor: '#fff' },
          header: () => <CustomHeader />,
          headerTitle: '', // 기본 제목 숨기기
        }}
      >
       <Stack.Screen
          name="Join"
          component={JoinPage}
          options={{ headerShown: false }} // 첫 화면에서는 헤더 숨기기
        />
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // HomeScreen에서도 헤더 숨기기
          />
        <Stack.Screen name="Main" component={BottomTabNavigation} />
        <Stack.Screen name="Recommend" component={RecommendPage} />
        <Stack.Screen name="MyTravelPage" component={MyTravelPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}