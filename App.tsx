import { StatusBar } from 'expo-status-bar';
import { TaskContextProvider } from 'libs/context/TaskContext';
import React from 'react';
import Toast from 'react-native-toast-message';

import { MainNavigation } from './navigations';

const App = (): React.ReactElement => {
  return (
    <TaskContextProvider>
      <StatusBar style='auto' />
      <MainNavigation />
      <Toast />
    </TaskContextProvider>
  );
};

export default App;
