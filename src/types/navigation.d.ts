import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Join: undefined;
  Home: undefined;
  Main: undefined;
  Recommend: undefined;
  MyTravelPage: undefined;
  Calendar: undefined;
};
export type BottomTabParamList = {
  HomeTab: undefined; // Home Tab
  MyTravel: undefined; // MyTravel Tab
  Calendar: undefined; // Calendar Tab
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
  'MyTravelPage'
>;
 
export type JoinPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Calendar'
>;