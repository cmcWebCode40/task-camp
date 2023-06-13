import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HOME_SCREEN,
  FAVOURITE_TASK_SCREEN,
  SETTINGS_SCREEN,
  TASK_HISTORY_SCREEN,
} from 'libs/constants';
import React from 'react';

import { Icon } from 'components/atoms';
import {
  HomeScreen,
  FavoriteTaskScreen,
  SettingScreen,
  TaskHistoryScreen,
} from 'screens';

type TabIconArgs = {
  focused: boolean;
};

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: HOME_SCREEN,
    component: HomeScreen,
    icon: ({ focused }: TabIconArgs) => (
      <Icon name={focused ? 'home' : 'ios-home-outline'} />
    ),
  },
  {
    name: FAVOURITE_TASK_SCREEN,
    component: FavoriteTaskScreen,
    icon: ({ focused }: TabIconArgs) => (
      <Icon name={focused ? 'star' : 'staro'} />
    ),
  },
  {
    name: SETTINGS_SCREEN,
    component: SettingScreen,
    icon: ({ focused }: TabIconArgs) => (
      <Icon name={focused ? 'settings' : 'settings-outline'} />
    ),
  },
  {
    name: TASK_HISTORY_SCREEN,
    component: TaskHistoryScreen,
    icon: ({ focused }: TabIconArgs) => (
      <Icon name={focused ? 'history' : 'history-outline'} />
    ),
  },
];

const TabNavigation: React.FunctionComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          options={{
            tabBarIcon: item.icon,
            tabBarActiveTintColor: '#000',
          }}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
