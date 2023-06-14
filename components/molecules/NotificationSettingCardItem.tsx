import { colors } from 'libs/constants/colors';
import React, { useState } from 'react';

import { Heading } from 'components/atoms';
import { StyledSwitch, StyledView } from 'components/StyledRN';

interface NotificationSettingCardProps {
  title: string;
}

const NotificationSettingCard: React.FunctionComponent<
  NotificationSettingCardProps
> = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <StyledView>
      <StyledView className='flex-row justify-between items-center space-x-1'>
        <Heading className='font-semibold text-xl'>{title}</Heading>
        <StyledSwitch
          trackColor={{ false: colors.black, true: colors.gray[100] }}
          thumbColor={isEnabled ? colors.white : colors.white}
          ios_backgroundColor={colors.black}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </StyledView>
    </StyledView>
  );
};

export default NotificationSettingCard;
