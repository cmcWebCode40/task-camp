import React from 'react';
import { TextInputProps } from 'react-native';

import { Icon, Input } from 'components/atoms';
import { StyledView } from 'components/StyledRN';

interface SearchInputProps extends TextInputProps {
  className?: string;
  ref?: React.RefObject<typeof Input>;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  className,
  // ref,
  ...rest
}) => {
  return (
    <StyledView
      className={`flex-row border items-center justify-between border-black py-2 px-2 h-12 rounded ${className}`}
    >
      <Input {...rest} className='border-none h-10 flex-1 border-white' />
      <StyledView className='w-10'>
        <Icon name='search1' />
      </StyledView>
    </StyledView>
  );
};

export default SearchInput;
