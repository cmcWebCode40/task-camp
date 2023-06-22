import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Icon } from 'components/atoms';
import { StyledView } from 'components/StyledRN';

const HeaderNavigation: React.FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <StyledView className='flex-row items-center justify-between py-2 -ml-2'>
      <StyledView>
        {navigation.canGoBack() && (
          <Icon
            accessibilityLabel='navigate back'
            name='chevron-back'
            size={28}
            onPress={navigation.goBack}
          />
        )}
      </StyledView>
      <StyledView />
    </StyledView>
  );
};

export default HeaderNavigation;
