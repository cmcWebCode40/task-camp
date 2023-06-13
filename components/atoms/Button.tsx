import { StyledText, StyledPressable } from 'components/StyledRN';
import React from 'react';
import { PressableProps } from 'react-native';

type Size = 'sm' | 'md' | 'lg';
type ButtonVariant = 'contained' | 'outlined' | 'text';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  contained: 'bg-black text-white hover:bg-slate-800',
  outlined: 'bg-white text-black hover:opacity-50 border border-black',
  text: 'text-black',
};

const variantSizes = {
  md: 'h-10 py-2 px-4',
  sm: 'h-9 px-2',
  lg: 'h-11 px-8',
};

const buttonTextClass = {
  contained: 'text-white',
  outlined: 'text-black',
  text: 'text-black',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  style,
  size = 'md',
  variant = 'contained',
  className,
  children,
  ...rest
}) => {
  return (
    <StyledPressable
      className={`flex items-center justify-center rounded hover:bg-slate-300
      active:bg-slate-500
 ${variantSizes[size]} ${variantStyles[variant]}`}
      {...rest}
    >
      <StyledText
        className={`${buttonTextClass[variant]} font-semibold text-center`}
      >
        {children}
      </StyledText>
    </StyledPressable>
  );
};

export default Button;
