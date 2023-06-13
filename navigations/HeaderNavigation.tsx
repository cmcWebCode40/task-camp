import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform } from 'react-native';

import { Icon } from 'components/atoms';
import { StyledView } from 'components/StyledRN';

const HeaderNavigation: React.FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <StyledView
      className="flex items-center justify-between py-2"
      style={[
        Platform.select({
          ios: {
            borderBottomWidth: 1,
            // borderBottomColor: theme.colors.gray100,
          },
          android: { elevation: 1 },
        }),
      ]}
    >
      {navigation.canGoBack() && (
        <Icon name='chevron-back' onPress={navigation.goBack} />
      )}
    </StyledView>
  );
};

export default HeaderNavigation
