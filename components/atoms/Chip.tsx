import React from 'react';
import { ViewProps } from 'react-native';

import { StyledView } from 'components/StyledRN';

import Paragraph from './Paragraph';

type Size = 'sm' | 'md' | 'lg';
type ChipVariant = 'high' | 'medium' | 'low' | 'in progress' | 'completed';

interface ChipProps extends ViewProps {
  variant?: ChipVariant;
  size?: Size;
  className?: string;
}

const variantStyles = {
  high: 'bg-red-600 text-white hover:bg-slate-800',
  medium: 'bg-blue-600 text-black',
  low: 'bg-yellow-300',
  completed: 'bg-green-600',
  'in progress': 'bg-blue-600',
};

const variantSizes = {
  md: 'py-1 px-2',
  sm: 'p-0',
  lg: 'py-3 px-4',
};

const Chip: React.FunctionComponent<ChipProps> = ({
  size = 'md',
  variant = 'medium',
  className,
  ...rest
}) => {
  return (
    <StyledView
      className={`flex w-auto items-center justify-center rounded hover:bg-slate-300
      active:bg-slate-500
 ${variantSizes[size]} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      <Paragraph
        variant='sm'
        className={`text-center text-white font-semibold`}
      >
        {variant}
      </Paragraph>
    </StyledView>
  );
};

export default Chip;
