import { Heading } from 'components/atoms';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';
import React from 'react';

const TaskHistoryScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <StyledView>
        <Heading>TaskHistoryScreen</Heading>
      </StyledView>
    </MainLayout>
  );
};

export default TaskHistoryScreen;
