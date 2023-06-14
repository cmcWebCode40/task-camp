import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ADD_TASK_SCREEN } from 'libs/constants';
import { colors } from 'libs/constants/colors';
import { MainNaviagtionScreens } from 'libs/types';
import React, { useCallback } from 'react';

import { Button, Icon } from 'components/atoms';
import { SearchInput, TaskCardItem } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const HomeScreen: React.FunctionComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNaviagtionScreens>>();

  const handleNewTaskNavigation = useCallback(() => {
    navigation.navigate(ADD_TASK_SCREEN);
  }, [navigation]);
  return (
    <MainLayout withScrollView={false}>
      <StyledView className='flex-1 justify-between h-auto'>
        <StyledView className='space-y-4'>
          <SearchInput placeholder='Search Task' />
          <StyledView className='space-y-4'>
            {[1, 2, 3, 4].map((item, index) => (
              <TaskCardItem
                key={item}
                title='Technical Interview'
                variant={index % 2 === 0 ? 'high' : 'medium'}
                time='12/07/2023'
              />
            ))}
          </StyledView>
        </StyledView>
        <Button
          onPress={handleNewTaskNavigation}
          className='absolute bottom-0 right-0'
          icon={<Icon name='add-task' color={colors.white} />}
        >
          New Task
        </Button>
      </StyledView>
    </MainLayout>
  );
};

export default HomeScreen;
