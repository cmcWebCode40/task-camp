import { Heading } from 'components/atoms';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';
import React from 'react';


const SettingScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <StyledView>
        <Heading>SettingScreen</Heading>
      </StyledView>
    </MainLayout>

  );
};

export default SettingScreen;
