import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Join: undefined;
  Home: undefined;
  Main: undefined;
  Recommend: undefined;
  MyTravel: undefined;
  Calendar: undefined;
  AiChatPage : undefined
};
export type BottomTabParamList = {
  HomeTab: undefined; // Home Tab
  MyTravel: undefined; // MyTravel Tab
  Calendar: undefined; // Calendar Tab
  AiChatPage: undefined;
};

export type JoinPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Join'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type MainPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

export type RecommendPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Recommend'
>;

export type MyTravelPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyTravel'
>;
 
export type JoinPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Calendar'
>;

export type AiChatPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AiChatPage'
>;