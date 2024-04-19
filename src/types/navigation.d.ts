import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  AppStack: undefined;
  AuthStack: undefined;
  MovieDetails: {id: number; type: string};

  Search: undefined;
};

export type AppStackParamList = {
  Movies: undefined;
  Series: undefined;
  Settings: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

type ScreenParamList = Omit<RootStackParamList, 'AuthStack' | 'AppStack'> &
  AppStackParamList &
  AuthStackParamList;

export type ScreenProps<T extends keyof ScreenParamList = any> =
  NativeStackScreenProps<ScreenParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreenParamList {}
  }
}
