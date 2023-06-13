import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADD_TASK_SCREEN, MAIN_STACK_SCREEN, TASK_DETAIL_SCREEN } from 'libs/constants';
import { MainNaviagtionScreens } from 'libs/types';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AddTaskScreen, TaskDetailScreen } from 'screens';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator<MainNaviagtionScreens>();

const MainNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={MAIN_STACK_SCREEN} component={TabNavigation} />
          <Stack.Screen name={ADD_TASK_SCREEN} component={AddTaskScreen} />
          <Stack.Screen name={TASK_DETAIL_SCREEN} component={TaskDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNavigation