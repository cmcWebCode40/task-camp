import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Button, Heading, Icon } from 'components/atoms';
import { StyledPressable, StyledView } from 'components/StyledRN';

enum DateTimeEnum {
  DATE = 'date',
  TIME = 'time',
}

interface DateCardProps {
  value: string;
  onSelect: (date: string) => void
}
const DateCard: React.FunctionComponent<DateCardProps> = ({ onSelect, value }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(DateTimeEnum.DATE);
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  );

  const handleDatePickerChange = (
    _event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode === DateTimeEnum.DATE) {
      const dateString = new Date(currentDate).toLocaleDateString();
      setSelectedDate(dateString);
      onSelect(dateString);
    }
  };

  const showMode = (currentMode: DateTimeEnum) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(DateTimeEnum.DATE);
  };
  return (
    <>
      <StyledPressable
        onPress={showDatepicker}
        className='border bg-white shadow-md border-black rounded p-2'
      >
        <Heading className='font-bold text-xl' numberOfLines={1}>
          Due Date
        </Heading>
        <StyledView className='flex-row justify-between items-center mt-4'>
          <StyledView className='flex-row justify-between items-center space-x-1'>
            <Icon size={16} name='ios-time-outline' />
            <Heading variant='sm' className='font-semibold text-sm'>
              {selectedDate ?? value ?? 'DD/MM/YYYY'}
            </Heading>
          </StyledView>
          <Button onPress={showDatepicker} variant='contained' size='sm'>
            Select
          </Button>
        </StyledView>
      </StyledPressable>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display={'default'}
          minimumDate={new Date()}
          onChange={handleDatePickerChange}
        />
      )}
    </>
  );
};

export default DateCard;
