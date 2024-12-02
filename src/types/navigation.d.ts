import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// RootStackParamList에 TodayRecommendPage 추가
export type RootStackParamList = {
  Join: undefined;
  Home: undefined;
  Main: undefined;
  Recommend: undefined;
  MyTravel: undefined;
  Calendar: undefined;
  AiChatPage: undefined;
  TravelPlan: undefined;
  TodayRecommend: undefined; 
  DetailTravel: undefined;
  MyPage: undefined;
  SaveTravel: undefined;
  Setting: undefined;
  TravelReview: undefined;
};

 
export type BottomTabParamList = {
  HomeTab: undefined;
  MyTravel: undefined;
  Calendar: undefined;
  AiChatPage: undefined;
  TravelPlan: undefined;
  MyPage: undefined;
};

// 각 네비게이션 타입을 추출하는 유틸리티 타입
export type NavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

// 예제: 특정 페이지 네비게이션 타입 사용
export type JoinPageNavigationProp = NavigationProp<'Join'>;
export type HomeScreenNavigationProp = NavigationProp<'Home'>;
export type MainPageNavigationProp = NavigationProp<'Main'>;
export type RecommendPageNavigationProp = NavigationProp<'Recommend'>;
export type MyTravelPageNavigationProp = NavigationProp<'MyTravel'>;
export type CalendarPageNavigationProp = NavigationProp<'Calendar'>;
export type AiChatPageNavigationProp = NavigationProp<'AiChatPage'>;
export type TravelPlanPageNavigationProp = NavigationProp<'TravelPlan'>;
export type TodayRecommendPageNavigationProp = NavigationProp<'TodayRecommend'>;
export type DetailTravelNavigationProp = NavigationProp<'DetailTravel'>;
export type MyPageNavigationProp = NavigationProp<'MyPage'>; 
export type SaveTravelNavigationProp = NavigationProp<'SaveTravel'>; 
export type SettingNavigationProp = NavigationProp<'Setting'>; 
export type TravelReviewNavigationProp = NavigationProp<'TravelReview'>; 