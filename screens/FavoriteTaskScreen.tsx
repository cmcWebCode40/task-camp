import { Heading } from 'components/atoms';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';
import React from 'react';

const FavoriteTaskScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <StyledView>
        <Heading>FavoriteTaskScreen</Heading>
      </StyledView>
    </MainLayout>
  );
};

export default FavoriteTaskScreen;
