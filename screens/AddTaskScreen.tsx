import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HOME_SCREEN, TASK_PRIORITY } from 'libs/constants';
import useTask from 'libs/hooks/useTask';
import {
  HomeTabNavigationScreens,
  MainNavigationScreens,
  Task,
} from 'libs/types';
import alertToaster from 'libs/utils/toaster';
import React, { useCallback, useEffect, useState } from 'react';

import { Button, Heading, Input } from 'components/atoms';
import { DateCard, DropDownMenu } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

import HeaderNavigation from '../navigations/HeaderNavigation';

type AddTaskRouteProp = RouteProp<MainNavigationScreens, 'AddTask'>;

interface AddTaskScreenProps {
  route: AddTaskRouteProp;
}

const AddTaskScreen: React.FunctionComponent<AddTaskScreenProps> = ({
  route,
}) => {
  const params = route.params;
  const { add, isLoading, update, tasks } = useTask();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeTabNavigationScreens>>();
  const [task, setTasks] = useState<Task>({
    createdAt: new Date().toLocaleDateString(),
    description: 'Hello world',
    dueDate: '30/06/2022',
    isCompleted: false,
    priority: 'medium',
    title: 'Hello world',
    isFavorite: false,
  });

  useEffect(() => {
    (() => {
      if (params.id) {
        setTasks(tasks?.find((item) => item.id === params.id) as Task);
      }
    })();
  }, [params.id, tasks]);

  const handleChange = useCallback(
    (value: string | boolean, type: keyof Task) => {
      setTasks((task) => ({ ...task, [type]: value }));
    },
    []
  );

  const handleSubmit = async () => {
    if (params?.type === 'edit' && params.id) {
      await update(task, params.id);
      navigation.goBack();
    } else {
      await add(task);
      navigation.navigate(HOME_SCREEN);
    }
    alertToaster({
      type: 'success',
      options: { text1: 'Item Added', position: 'bottom' },
    });
  };

  return (
    <MainLayout withScrollView={false}>
      <HeaderNavigation />
      <StyledView className='flex-1 justify-between h-auto'>
        <StyledView className='space-y-6'>
          <Heading variant='md' className='mb-4 font-semibold'>
            Add New Task
          </Heading>
          <Input
            placeholder='Enter Task Title....'
            maxLength={20}
            value={task.title}
            onChangeText={(value) => handleChange(value, 'title')}
          />
          <Input
            placeholder='Enter Task Description'
            multiline={true}
            className='h-40'
            value={task.description}
            onChangeText={(value) => handleChange(value, 'description')}
          />
          <StyledView>
            <DateCard
              value={task.dueDate}
              onSelect={(date) => {
                handleChange(date, 'dueDate');
              }}
            />
          </StyledView>
          <DropDownMenu
            selectedItem={task.priority}
            onSelect={(value) => {
              handleChange(value, 'priority');
            }}
            placeholder='Choose priority level'
            items={TASK_PRIORITY}
          />
        </StyledView>
        <Button disabled={isLoading} onPress={handleSubmit} variant='contained'>
          Submit
        </Button>
      </StyledView>
    </MainLayout>
  );
};

export default AddTaskScreen;
