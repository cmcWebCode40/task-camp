import { colors } from 'libs/constants/colors';
import { PriorityWithAll, SortOrder } from 'libs/types';
import React from 'react';

import { Heading, Icon } from 'components/atoms';
import { SearchInput } from 'components/molecules';
import { StyledPressable, StyledView } from 'components/StyledRN';

interface SearchBarPanelProps {
  onSortByDate: (type: SortOrder) => void;
  onSortByLevel: (level: PriorityWithAll) => void;
  onChange: (value: string) => void;
}

const priorityLevel: PriorityWithAll[] = ['all', 'high', 'medium', 'low'];

const SearchBarPanel: React.FunctionComponent<SearchBarPanelProps> = ({
  onChange,
  onSortByDate,
  onSortByLevel,
}) => {
  return (
    <StyledView>
      <SearchInput
        autoCapitalize='none'
        placeholder='Search Task'
        onChangeText={onChange}
      />
      <StyledView className='flex-row justify-between items-center mt-4 z-50'>
        <StyledView className='flex-row bg-zinc-100 px-2 rounded space-x-2 '>
          {priorityLevel.map((item, index) => (
            <StyledPressable
              onPress={() => onSortByLevel(item)}
              className='space-x-2 flex-row active:opacity-60'
              key={item}
            >
              <Heading variant='sm' className='text-sm py-2 font-semibold'>
                {item}
              </Heading>
              {index !== 3 && (
                <StyledView className='h-full w-[1px] bg-gray-300' />
              )}
            </StyledPressable>
          ))}
        </StyledView>
        <StyledView className='flex-row bg-zinc-100 p-2 rounded'>
          <Icon
            onPress={() => onSortByDate('asc')}
            name='arrow-upward'
            size={20}
            color={colors.gray[200]}
          />
          <Icon
            onPress={() => onSortByDate('desc')}
            name='arrow-downward'
            size={20}
            color={colors.gray[200]}
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default SearchBarPanel;
