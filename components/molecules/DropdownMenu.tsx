import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { StyledDropDownPicker, StyledView } from 'components/StyledRN';

interface DropDownMenuProps extends TextInputProps {
  className?: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  placeholder?: string;
  selectedItem: string;
  onSelect: (value: any) => void;
}

const DropDownMenu: React.FunctionComponent<DropDownMenuProps> = ({
  className,
  items,
  onSelect,
  selectedItem,
  placeholder,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState(items);


  return (
    <StyledView {...rest} className={className}>
      <StyledDropDownPicker
        open={open}
        value={value || selectedItem}
        items={data}
        placeholder={placeholder}
        setOpen={setOpen}
        setValue={(value) => {
          onSelect(value(''));
          setValue(value);
        }}
        setItems={setData}
        className='rounded bg-white shadow-md z-30'
      />
    </StyledView>
  );
};

export default DropDownMenu;
