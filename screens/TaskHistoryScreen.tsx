import React from 'react';

import { Heading } from 'components/atoms';
import { DeletedTaskCardItem } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const TaskHistoryScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <Heading className='font-bold mb-4'>History</Heading>
      <StyledView className='flex-1 justify-between'>
        <DeletedTaskCardItem
          title='Technical Interview'
          variant='high'
          time='12/07/2023'
        />
      </StyledView>
    </MainLayout>
  );
};

export default TaskHistoryScreen;
