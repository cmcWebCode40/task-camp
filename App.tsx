import { StatusBar } from 'expo-status-bar';
import { MainNavigation } from './navigations';
import React from 'react';
import { StyledView } from './components/StyledRN';

const App = (): React.ReactElement => {
  return (
    <StyledView className='flex-1'>
      <StatusBar style='auto' />
      <MainNavigation />
    </StyledView>
  );
};

export default App;
