import DatePicker, { CalendarContainer } from 'react-datepicker';
import { Calendar } from './DatePickerForm.styled';
import 'react-datepicker/dist/react-datepicker.css';

const MyContainer = ({ className, children }) => {
  return (
    // <div style={{ padding: '10px', background: '#FDF7F2', color: '#fff' }}>
    <Calendar>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
      {/* </div> */}
    </Calendar>
  );
};

const DatePickerField = ({ name, value, onChange }) => {
  return (
    // <Wrapper>
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={val => {
        onChange(name, val);
      }}
      placeholderText="Type date of birth"
      shouldCloseOnSelect={true}
      dateFormat="dd.MM.yyyy"
      calendarContainer={MyContainer}
    />
    // </Wrapper>
  );
};

export default DatePickerField;
