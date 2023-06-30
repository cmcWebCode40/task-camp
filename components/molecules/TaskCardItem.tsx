import { Task } from 'libs/types';
import React from 'react';
import { Pressable, PressableProps } from 'react-native';

import { Chip, Heading, Icon } from 'components/atoms';
import { StyledView } from 'components/StyledRN';

interface TaskCardItemProps
  extends PressableProps,
  Pick<React.ComponentPropsWithRef<typeof Chip>, 'size' | 'variant'> {
  title: string;
  className?: string;
  dueDate: string;
  taksId: string;
  isFavorite?: boolean;
  onNavigate?: (id: string) => void;
  onAddFavorite: (data: Task, id: string) => Promise<void>;
}

const TaskCardItem: React.FunctionComponent<TaskCardItemProps> = ({
  size,
  variant,
  dueDate,
  title,
  taksId,
  onNavigate,
  isFavorite,
  onAddFavorite,
  className = 'mb-2',
  ...rest
}) => {
  const handleFavorite = () => {
    const data: Task = {
      id: taksId,
      dueDate,
      title,
      priority: variant as any,
      isFavorite: !isFavorite,
    };
    onAddFavorite(data, taksId);
  };

  return (
    <Pressable
      {...rest}
      onPress={() => {
        if (onNavigate) {
          onNavigate(taksId);
        }
      }}
      style={({ pressed }) => (pressed ? { opacity: 0.6 } : {})}
    >
      {({ pressed }) => (
        <StyledView
          className={`${className} border border-black rounded p-2 bg-white shadow-md active:bg-slate-50`}
          style={{ opacity: pressed ? 0.6 : 1 }}
        >
          <StyledView className='flex-row justify-between items-center mb-2'>
            <Heading className='font-semibold text-xl' numberOfLines={1}>
              {title}
            </Heading>
            <Pressable onPress={handleFavorite}>
              <Icon name={isFavorite ? 'star' : 'staro'} />
            </Pressable>
          </StyledView>
          <StyledView className='flex-row justify-between items-center mt-4'>
            <Chip variant={variant} size={size} />
            <StyledView className='flex-row justify-between items-center space-x-1'>
              <Icon name='date-range' size={16} />
              <Heading variant='sm' className='font-semibold text-sm'>
                {dueDate}
              </Heading>
            </StyledView>
          </StyledView>
        </StyledView>
      )}
    </Pressable>
  );
};

export default TaskCardItem;
