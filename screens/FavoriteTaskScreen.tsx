import React from 'react';

import { Heading } from 'components/atoms';
import { TaskCardItem } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const FavoriteTaskScreen: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <Heading className='font-bold mb-4'>My Favorites</Heading>
      <StyledView className='space-y-4'>
        {[1, 2, 3, 4].map((item, index) => (
          <TaskCardItem
            key={item}
            title='Technical Interview'
            variant={index % 2 === 0 ? 'high' : 'low'}
            time='12/07/2023'
          />
        ))}
      </StyledView>
    </MainLayout>
  );
};

export default FavoriteTaskScreen;
