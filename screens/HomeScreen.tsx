import { Button, Heading } from 'components/atoms';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';
import React from 'react';

const HomeScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <StyledView>
        <Heading variant='md'>HomeScreen</Heading>
        <Button variant="contained">Submit</Button>
      </StyledView>
    </MainLayout>
  );
};

export default HomeScreen;
