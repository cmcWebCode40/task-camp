import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyledText, StyledView } from './components/StyledRN';

const App = (): React.ReactElement => {
  return (
    <StyledView className='flex-1 items-center justify-center bg-slate-600 '>
      <StyledText className='text-red-500 font-bold text-2xl'>
        Open up App.tsx to start working on your app!
      </StyledText>
      <StyledText>Open up App.tsx to start working on your app!</StyledText>
      <StatusBar style='auto' />
    </StyledView>
  );
};

export default App;
