import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeTabNavigationScreens = {
  Home: undefined;
  TaskHistory: undefined;
  Settings: undefined;
};

export type MainNavigationScreens = {
  Main: undefined;
  TaskDetails: {
      id:string
    };
  AddTask: {
    type:'new' | 'edit',
    id?:string
  };
};

export type CombinedNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<HomeTabNavigationScreens>,
  NativeStackNavigationProp<MainNavigationScreens>
>;
