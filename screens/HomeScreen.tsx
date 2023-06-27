import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlashList } from '@shopify/flash-list';
import { ADD_TASK_SCREEN, TASK_DETAIL_SCREEN } from 'libs/constants';
import { colors } from 'libs/constants/colors';
import useSearch from 'libs/hooks/useSearch';
import useTask from 'libs/hooks/useTask';
import { MainNavigationScreens, Task } from 'libs/types';
import React, { useCallback, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { Button, Heading, Icon } from 'components/atoms';
import { EmptyListCard, TaskCardItem } from 'components/molecules';
import { SearchBarPanel } from 'components/organisms';
import { StyledActivityIndicator, StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const HomeScreen: React.FunctionComponent = () => {
  const [isScrollingStart, setIsScrollingStart] = useState<boolean>(false);
  const { tasks, isLoading, update } = useTask();
  const {
    searchResult,
    handleTaskSearch,
    sortByDate,
    sortByPriority,
    notFound,
  } = useSearch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>();

  const handleNewTaskNavigation = useCallback(() => {
    navigation.navigate(ADD_TASK_SCREEN, {
      type: 'new',
    });
  }, [navigation]);

  const handleTaskDetailsNavigation = useCallback(
    (id: string) => {
      navigation.navigate(TASK_DETAIL_SCREEN, {
        id,
      });
    },
    [navigation]
  );

  const handleFavorite = async (data: Task, id: string) => {
    update(data, id, false);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    const scrollPosition = contentOffset.y;
    if (scrollPosition !== 0) {
      setIsScrollingStart(false);
    } else {
      setIsScrollingStart(true);
    }
  };

  return (
    <MainLayout withScrollView={false}>
      <Heading className='mb-4 font-semibold'>My Tasks</Heading>
      {isLoading ? (
        <StyledView className='flex-1 items-center justify-center'>
          <StyledActivityIndicator color={colors.black} />
        </StyledView>
      ) : (
        <StyledView className='flex-1 justify-between h-auto'>
          <StyledView className='space-y-4'>
            <SearchBarPanel
              onChange={handleTaskSearch}
              onSortByLevel={sortByPriority}
              onSortByDate={sortByDate}
            />
            {(!tasks || notFound) && (
              <EmptyListCard
                message={
                  'No Task Added, You can add new task by click the Add button below.'
                }
              />
            )}
            <StyledView className='space-y-4 h-screen'>
              {(searchResult?.length || tasks?.length) && (
                <FlashList
                  onScroll={handleScroll}
                  data={searchResult || tasks}
                  numColumns={1}
                  renderItem={({ item }) => (
                    <TaskCardItem
                      key={item.id}
                      title={item.title}
                      variant={item.priority}
                      dueDate={item.dueDate}
                      taksId={item.id as string}
                      isFavorite={item.isFavorite}
                      onAddFavorite={handleFavorite}
                      onNavigate={handleTaskDetailsNavigation}
                    />
                  )}
                  estimatedItemSize={100}
                />
              )}
            </StyledView>
          </StyledView>
          <Button
            onPress={handleNewTaskNavigation}
            className='absolute bottom-0 right-0'
            icon={<Icon name='add-task' color={colors.white} />}
          >
            {isScrollingStart && 'New Task'}
          </Button>
        </StyledView>
      )}
    </MainLayout>
  );
};
export default HomeScreen;
