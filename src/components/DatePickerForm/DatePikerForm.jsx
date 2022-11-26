import DatePicker, { CalendarContainer } from 'react-datepicker';
import { Calendar } from './DatePickerForm.styled';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

const MyContainer = ({ className, children }) => {
  return (
    <Calendar>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    </Calendar>
  );
};

const DatePickerField = ({ name, value, onChange, user }) => {
  return (
    <DatePicker
      selected={value || null}
      onChange={val => {
        onChange(name, val);
      }}
      placeholderText="Type date of birth"
      shouldCloseOnSelect={true}
      dateFormat="dd.MM.yyyy"
      calendarContainer={MyContainer}
      maxDate={new Date()}
      showYearDropdown
      yearDropdownItemNumber={80}
      scrollableYearDropdown
    />
  );
};

export default DatePickerField;
