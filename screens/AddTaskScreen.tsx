import { HeaderNavigation } from 'navigations';
import React from 'react';

import { Button, Heading, Input } from 'components/atoms';
import { DateCard, DropDownMenu } from 'components/molecules';
import { StyledView } from 'components/StyledRN';
import { MainLayout } from 'components/templates';

const AddTaskScreen: React.FunctionComponent = () => {
  return (
    <MainLayout withScrollView={false}>
      <HeaderNavigation />
      <StyledView className='flex-1 justify-between h-auto'>
        <StyledView className='space-y-6'>
          <Heading variant='md' className='mb-4'>
            Add New Task
          </Heading>
          <Input placeholder='Enter Task Title..' />
          <Input
            placeholder='Enter Task Description'
            multiline={true}
            className='h-40'
          />
          <StyledView>
            <DateCard />
          </StyledView>

          <DropDownMenu
            placeholder='Choose priority level'
            items={[
              { label: 'High', value: 'high' },
              { label: 'Medium', value: 'medium' },
              { label: 'Low', value: 'low' },
            ]}
          />
        </StyledView>
        <Button variant='contained'>Submit</Button>
      </StyledView>
    </MainLayout>
  );
};

export default AddTaskScreen;
