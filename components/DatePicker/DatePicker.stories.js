import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import React from 'react';

export default {
  title: 'MUIX/DatePicker',
};

export const Default = () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
);

export const WithInput  = () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker />
    </LocalizationProvider>
);