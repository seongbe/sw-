import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components';

import JoinPage from './src/screen/onboarding/JoinPage';
import HomeScreen from './src/screen/onboarding/HomeScreen';
import RecommendPage from './src/screen/travel/RecommendPage';
import BottomTabNavigation from './src/navigation/BottomTabNavigationApp';
import MyTravelPage from './src/screen/home/MyTravelPage';
import CalendarPage from './src/screen/calendar/CalendarPage';
import TravelPlan from './src/screen/travel/TravelPlan';
import CustomHeader from './src/component/CustomHeader'; 
import TodayRecommendPage from './src/screen/travel/TodayRecommendPage';
import DetailTravel from './src/screen/calendar/DetailTravel' 
import MyPage from './src/screen/mypage/MyPage';
import SaveTravel  from './src/screen/mypage/SaveTravel';
import Setting from './src/screen/mypage/Setting';
import TravelReview from './src/screen/mypage/TravelReview';
import Theme from './src/styles/theme';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['mytravelapp://', 'https://mytravelapp.com'],
  config: {
    screens: {
      HomeTab: '',
      MyTravel: 'my-travel',
      Calendar: 'calendar',
      AiChatPage: 'ai-chat',
    },
  },
};

export default function App() {
  useEffect(() => {
    const handleIncomingLink = (url: string | null) => {
      if (url) {
        console.log('Received deep link URL:', url);
        const tokenCode = url.split('code=')[1];
        if (tokenCode) {
          console.log('Extracted token code:', tokenCode);
          // TODO: Send tokenCode to your server via API
        }
      }
    };

    // Subscribe to deep link events
    const subscription = Linking.addEventListener('url', ({ url }) => handleIncomingLink(url));

    // Handle initial URL if app is opened via deep link
    Linking.getInitialURL().then(handleIncomingLink);

    // Cleanup subscription on unmount
    return () => subscription.remove();
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          initialRouteName="Join"
          screenOptions={{
            header: () => <CustomHeader />,
            contentStyle: { backgroundColor: '#fff' },
          }}
        >
          <Stack.Screen name="Join" component={JoinPage} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={BottomTabNavigation} />
          <Stack.Screen name="Recommend" component={RecommendPage} />
          <Stack.Screen name="MyTravel" component={MyTravelPage} />
          <Stack.Screen name="Calendar" component={CalendarPage} />
          <Stack.Screen name="TravelPlan" component={TravelPlan} />
          <Stack.Screen name="TodayRecommend" component={TodayRecommendPage} />
          <Stack.Screen name="DetailTravel" component={DetailTravel}/>
          <Stack.Screen name="MyPage" component={MyPage} /> 
          <Stack.Screen name="SaveTravel" component={SaveTravel} /> 
          <Stack.Screen name="Setting" component={Setting}/>
          <Stack.Screen name="TravelReview" component={TravelReview}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}