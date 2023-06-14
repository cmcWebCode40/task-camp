import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyledView } from './components/StyledRN';
import { MainNavigation } from './navigations';

const App = (): React.ReactElement => {
  return (
    <StyledView className='flex-1'>
      <StatusBar style='auto' />
      <MainNavigation />
    </StyledView>
  );
};

export default App;
