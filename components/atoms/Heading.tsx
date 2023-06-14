import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from 'components/StyledRN';

type Size = 'sm' | 'md' | 'lg';

interface HeadingProps extends TextProps {
  variant?: Size;
  className?: string;
}

const variantStyles = {
  sm: 'text-base',
  md: 'text-2xl',
  lg: 'text-5xl',
};

const Heading: React.FunctionComponent<HeadingProps> = ({
  variant = 'md',
  className,
  ...rest
}) => {
  return (
    <StyledText
      className={`
      ${variantStyles[variant]} text-black ${className}`}
      {...rest}
    />
  );
};

export default Heading;
