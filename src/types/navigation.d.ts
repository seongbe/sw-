// types/navigation.d.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Join: undefined;
  Home: undefined;
};

export type JoinPageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Join'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
