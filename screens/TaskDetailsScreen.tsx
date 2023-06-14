import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ADD_TASK_SCREEN } from 'libs/constants';
import { MainNaviagtionScreens } from 'libs/types';
import { HeaderNavigation } from 'navigations';
import React, { useCallback } from 'react';

import { Chip, Heading, Icon, Paragraph } from 'components/atoms';
import { StyledScrollView, StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const taskDescription = `
useTransition is a Hook, so it can only be called inside components or custom Hooks. If you need to start a transition somewhere else (for example, from a data library), call the standalone startTransition instead.

You can wrap an update into a transition only if you have access to the set function of that state. If you want to start a transition in response to some prop or a custom Hook value, try useDeferredValue instead.

The function you pass to startTransition must be synchronous. React immediately executes this function, marking all state updates that happen while it executes as transitions. If you try to perform more state updates later (for example, in a timeout), they won’t be marked as transitions.

A state update marked as a transition will be interrupted by other state updates. For example, if you update a chart component inside a transition, but then start typing into an input while the chart is in the middle of a re-render, React will restart the rendering work on the chart component after handling the input update.

Transition updates can’t be used to control text inputs.

If there are multiple ongoing transitions, React currently batches them together. This is a limitation that will likely be removed in a future release.

`;

const TaskDetailScreen: React.FunctionComponent = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNaviagtionScreens>>();

  const handleNewTaskNavigation = useCallback(() => {
    navigation.navigate(ADD_TASK_SCREEN);
  }, [navigation]);
  return (
    <MainLayout withScrollView={false}>
      <HeaderNavigation />
      <StyledView>
        <StyledView className='flex-row justify-between items-center'>
          <Heading className='font-semibold'>Technical Interview</Heading>
          <Icon
            onPress={handleNewTaskNavigation}
            accessibilityLabel='Edit Task'
            name='edit'
          />
        </StyledView>
        <StyledView className='flex-row justify-between items-center mt-4 pb-4 pt-1'>
          <StyledView className='flex-row justify-between items-center space-x-2'>
            <Icon name='date-range' />
            <Heading variant='sm' className='font-semibold'>
              12/05/2023
            </Heading>
          </StyledView>
          <StyledView className='flex-row justify-between items-center space-x-2'>
            <Chip variant={'high'} />
            <Chip variant={'completed'} />
          </StyledView>
        </StyledView>
        <StyledScrollView>
          <Paragraph>{taskDescription}</Paragraph>
        </StyledScrollView>
      </StyledView>
    </MainLayout>
  );
};

export default TaskDetailScreen;
