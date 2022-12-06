import DatePicker, { CalendarContainer } from 'react-datepicker';
import { Calendar } from './DatePickerForm.styled';
import 'react-datepicker/dist/react-datepicker.css';

const MyContainer = ({ className, children }) => {
  return (
    <Calendar>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    </Calendar>
  );
};

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      selected={value || null}
      onChange={value => {
        onChange(name, value);
      }}
      placeholderText="Type date of birth"
      shouldCloseOnSelect={true}
      dateFormat="dd.MM.yyyy"
      calendarContainer={MyContainer}
      maxDate={new Date()}
      showYearDropdown
      dateFormatCalendar="MMMM"
      yearDropdownItemNumber={100}
      scrollableYearDropdown
    />
  );
};

export default DatePickerField;
