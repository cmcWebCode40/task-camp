import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from 'components/StyledRN';

type Size = 'sm' | 'md' | 'lg';

interface ParagraphProps extends TextProps {
  variant?: Size;
  className?: string;
}

const variantStyles = {
  sm: 'text-sm',
  md: 'text-xl',
  lg: 'text-2xl',
};

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  variant = 'md',
  className,
  ...rest
}) => {
  return (
    <StyledText
      className={`${variantStyles[variant]} text-black ${className}`}
      {...rest}
    />
  );
};

export default Paragraph;
