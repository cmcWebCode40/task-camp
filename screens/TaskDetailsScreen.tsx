import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ADD_TASK_SCREEN } from 'libs/constants';
import useTask from 'libs/hooks/useTask';
import { MainNavigationScreens } from 'libs/types';
import React, { useCallback, useMemo } from 'react';

import { Chip, Heading, Icon, Paragraph } from 'components/atoms';
import { StyledScrollView, StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

import HeaderNavigation from '../navigations/HeaderNavigation';

type TaskDetailRouteProp = RouteProp<MainNavigationScreens, 'TaskDetails'>;

interface TaskDetailProps {
  route: TaskDetailRouteProp;
}

const TaskDetailScreen: React.FunctionComponent<TaskDetailProps> = ({
  route,
}) => {
  const { id } = route.params;
  const { tasks } = useTask();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNavigationScreens>>();

  const task = useMemo(
    () => tasks?.find((item) => item.id === id),
    [id, tasks]
  );

  const handleNewTaskNavigation = useCallback(() => {
    navigation.navigate(ADD_TASK_SCREEN, {
      type: 'edit',
      id,
    });
  }, [navigation, id]);

  return (
    <MainLayout withScrollView={false}>
      <HeaderNavigation />
      <StyledView>
        <StyledView className='flex-row justify-between items-center'>
          <Heading className='font-semibold'>{task?.title}</Heading>
          <Icon
            onPress={handleNewTaskNavigation}
            accessibilityLabel='Edit Task'
            name='edit'
          />
        </StyledView>
        <StyledView className='flex-row justify-between items-center mt-4 pb-4 pt-1'>
          <StyledView className='flex-row justify-between items-center space-x-1'>
            <Icon size={16} name='date-range' />
            <Heading variant='sm' className='font-semibold text-sm'>
              {task?.dueDate}
            </Heading>
          </StyledView>
          <StyledView className='flex-row justify-between items-center space-x-2'>
            <Chip variant={task?.priority} />
            <Chip variant={'completed'} />
          </StyledView>
        </StyledView>
        <StyledScrollView>
          <Paragraph>{task?.description}</Paragraph>
        </StyledScrollView>
      </StyledView>
    </MainLayout>
  );
};

export default TaskDetailScreen;
