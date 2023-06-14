import React from 'react';

import { Heading } from 'components/atoms';
import { NotificationSettingCard } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const SettingScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <StyledView>
        <Heading className='mb-5 font-semibold'>Notifications</Heading>
        <NotificationSettingCard title='Task Due Date' />
      </StyledView>
    </MainLayout>
  );
};

export default SettingScreen;
