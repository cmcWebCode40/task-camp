import React from 'react';
import { PressableProps } from 'react-native';

import { Button, Chip, Heading, Icon } from 'components/atoms';
import { StyledPressable, StyledView } from 'components/StyledRN';

interface DeletedTaskCardItemProps
  extends PressableProps,
    Pick<React.ComponentPropsWithRef<typeof Chip>, 'size' | 'variant'> {
  title: string;
  time: string;
}

const DeletedTaskCardItem: React.FunctionComponent<
  DeletedTaskCardItemProps
> = ({ time, title, ...rest }) => {
  return (
    <StyledPressable
      {...rest}
      className='border bg-white shadow-md border-black rounded p-2'
    >
      <Heading className='font-bold text-2xl' numberOfLines={1}>
        {title}
      </Heading>
      <StyledView className='flex-row justify-between items-center mt-4'>
        <StyledView className='flex-row justify-between items-center space-x-1'>
          <Icon name='date-range' />
          <Heading variant='sm' className='font-semibold'>
            {time}
          </Heading>
        </StyledView>
        <Button variant='contained' size='sm'>
          Restore
        </Button>
      </StyledView>
    </StyledPressable>
  );
};

export default DeletedTaskCardItem;
