import React from 'react';
import { ScrollViewProps } from 'react-native';

import { StyledSafeAreaView, StyledScrollView } from 'components/StyledRN';

type MainLayoutProps = {
  children: React.ReactNode;
  withScrollView?: boolean;
  scrollViewClassName?: string;
  containerClassname?: string;
} & ScrollViewProps;

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  children,
  scrollViewClassName,
  containerClassname,
  withScrollView = true,
  ...otherProps
}) => {
  if (withScrollView) {
    return (
      <StyledSafeAreaView
        className={`bg-white flex-1 ${containerClassname}`}
        {...otherProps}
      >
        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className={`pt-3 flex-1 px-4 ${scrollViewClassName}`}
        >
          {children}
        </StyledScrollView>
      </StyledSafeAreaView>
    );
  }

  return (
    <StyledSafeAreaView className='bg-white flex-1 pt-3 px-4'>
      {children}
    </StyledSafeAreaView>
  );
};

export default MainLayout;
