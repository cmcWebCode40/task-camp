import React, { ForwardedRef, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { StyledTextInput } from 'components/StyledRN';

interface InputProps extends TextInputProps {
  className?: string;
}

const Input: React.FunctionComponent<InputProps> = forwardRef(
  ({ className, ...rest }, ref: ForwardedRef<TextInput>) => {
    return (
      <StyledTextInput
        className={`border border-black py-2 px-2 h-12 rounded ${className}`}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;
