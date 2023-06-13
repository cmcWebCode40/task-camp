import {
  StyledSafeAreaView,
  StyledScrollView,
  StyledView,
} from 'components/StyledRN';
import React from 'react';
import { ScrollViewProps, ViewStyle } from 'react-native';

type MainLayoutProps = {
  children: React.ReactNode;
  withScrollView?: boolean;
  scrollViewClassName?: string;
  containerClassname?: ViewStyle;
} & ScrollViewProps;

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
  style: scrollViewStyle,
  scrollViewClassName,
  containerClassname,
  withScrollView = true,
  ...otherProps
}) => {
  if (withScrollView) {
    return (
      <StyledSafeAreaView
        className={`bg-white flex-1 pt-3 px-3 ${containerClassname}`}
        {...otherProps}
      >
        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className={`pt-3 px-3 ${scrollViewClassName}`}
        >
          {children}
        </StyledScrollView>
      </StyledSafeAreaView>
    );
  }

  return (
    <StyledSafeAreaView className='bg-white flex-1 pt-3 px-3'>
      <StyledView>{children}</StyledView>
    </StyledSafeAreaView>
  );
};

export default MainLayout;
