import React from 'react';
import { PressableProps } from 'react-native';

import { StyledPressable, StyledText, StyledView } from 'components/StyledRN';

type Size = 'sm' | 'md' | 'lg';
type ButtonVariant = 'contained' | 'outlined' | 'text';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  size?: Size;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles = {
  contained: 'bg-black text-white hover:bg-slate-800',
  outlined: 'bg-white text-black hover:opacity-50 border border-black',
  text: 'text-black',
};

const variantSizes = {
  md: 'h-12 py-2 px-4',
  sm: 'h-9 px-2',
  lg: 'h-11 px-8',
};

const buttonTextClass = {
  contained: 'text-white',
  outlined: 'text-black',
  text: 'text-black',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  size = 'md',
  variant = 'contained',
  className,
  children,
  icon,
  ...rest
}) => {
  return (
    <StyledPressable
      className={`flex-row items-center justify-center bg-white shadow-md rounded space-x-2 hover:bg-slate-300
      active:bg-slate-500
 ${variantSizes[size]} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {icon && <StyledView>{icon}</StyledView>}
      <StyledText
        className={`${buttonTextClass[variant]} text-base font-semibold text-center flex-row items-center justify-center`}
      >
        {children}
      </StyledText>
    </StyledPressable>
  );
};

export default Button;
