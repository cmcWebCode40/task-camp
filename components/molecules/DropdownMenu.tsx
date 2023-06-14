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
}

const DropDownMenu: React.FunctionComponent<DropDownMenuProps> = ({
  className,
  items,
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
        value={value}
        items={data}
        placeholder={placeholder}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setData}
        className='rounded bg-white shadow-md z-30'
      />
    </StyledView>
  );
};

export default DropDownMenu;
