import * as Yup from 'yup';

const nameRegEx = /^([a-zA-Z]{2,}\s*(-*){2}[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
const locationRegEx = /^(\w+(-*)(\s*)\w+(,)\s*)+\w+$/;
const phoneRegEx = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(16, 'Must be 70 or less letter')
    .matches(nameRegEx, 'Input valid Name and Surname'),
  email: Yup.string().email('Invalid email'),
  birthday: Yup.date().nullable(),
  phone: Yup.string()
    .min(2, 'Must be 2 or more letter')
    .max(24, 'Must be 24 or less letter')
    .matches(phoneRegEx, 'Input in format +380...'),
  location: Yup.string()
    .min(8, 'Must be 8 or more characters')
    .max(120, 'Must be 120 or less characters')
    .matches(locationRegEx, 'Input in format "City, State"'),
});

export default ValidationSchema;
