import { FlashList } from '@shopify/flash-list';
import useTask from 'libs/hooks/useTask';
import { Task } from 'libs/types';
import React, { useMemo } from 'react';

import { Heading } from 'components/atoms';
import { EmptyListCard, TaskCardItem } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const FavoriteTaskScreen: React.FunctionComponent = () => {
  const { tasks, update } = useTask();
  const favoriteTasks = useMemo(
    () => tasks?.filter((item) => item.isFavorite),
    [tasks]
  );

  const handleFavorite = async (data: Task, id: string) => {
    await update(data, id);
  };

  return (
    <MainLayout>
      <Heading className='font-bold mb-4'>My Favorites</Heading>
      <StyledView className='space-y-4 h-full'>
        {!favoriteTasks?.length && (
          <EmptyListCard message='No Task have been marked as favorite yet' />
        )}
        {favoriteTasks?.length && (
          <FlashList
            data={favoriteTasks}
            numColumns={1}
            renderItem={({ item }) => (
              <TaskCardItem
                key={item.id}
                title={item.title}
                variant={'medium'}
                dueDate={item.dueDate}
                taksId={item.id as string}
                isFavorite={item.isFavorite}
                onAddFavorite={handleFavorite}
              />
            )}
            estimatedItemSize={100}
          />
        )}
      </StyledView>
    </MainLayout>
  );
};

export default FavoriteTaskScreen;
