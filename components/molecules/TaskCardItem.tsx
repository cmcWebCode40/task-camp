import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TASK_DETAIL_SCREEN } from 'libs/constants';
import { MainNaviagtionScreens } from 'libs/types';
import React, { useCallback } from 'react';
import { PressableProps } from 'react-native';

import { Chip, Heading, Icon } from 'components/atoms';
import { StyledPressable, StyledView } from 'components/StyledRN';

interface TaskCardItemProps
  extends PressableProps,
    Pick<React.ComponentPropsWithRef<typeof Chip>, 'size' | 'variant'> {
  title: string;
  time: string;
}

const TaskCardItem: React.FunctionComponent<TaskCardItemProps> = ({
  size,
  variant,
  time,
  title,
  ...rest
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainNaviagtionScreens>>();

  const handleNewTaskNavigation = useCallback(() => {
    navigation.navigate(TASK_DETAIL_SCREEN);
  }, [navigation]);

  return (
    <StyledPressable
      {...rest}
      onPress={handleNewTaskNavigation}
      className='border border-black rounded p-2 bg-white shadow-md active:bg-slate-50'
    >
      <StyledView className='flex-row justify-between items-center mb-2'>
        <Heading className='font-semibold text-xl' numberOfLines={1}>
          {title}
        </Heading>
        <Icon name='staro' />
      </StyledView>
      <StyledView className='flex-row justify-between items-center mt-4'>
        <Chip variant={variant} size={size} />
        <StyledView className='flex-row justify-between items-center space-x-1'>
          <Icon name='date-range' />
          <Heading variant='sm' className='font-light'>
            {time}
          </Heading>
        </StyledView>
      </StyledView>
    </StyledPressable>
  );
};

export default TaskCardItem;
