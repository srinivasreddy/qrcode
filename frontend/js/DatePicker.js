import { KeyboardDatePicker } from '@material-ui/pickers';
// eslint-disable-next-line import/no-duplicates
import React from 'react';
// eslint-disable-next-line import/no-duplicates
import { useState } from 'react';

export default function MyKeyboardDatePicker() {
  // eslint-disable-next-line no-undef
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <KeyboardDatePicker
        clearable
        format="MM/dd/yyyy"
        minDate={new Date()}
        placeholder="01/01/2020"
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
      />
    </>
  );
}
