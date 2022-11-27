import * as Yup from 'yup';

const FILE_SIZE = 5242880;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const ValidationSchema = Yup.object().shape({
  category: Yup.string().required('Required'),
  sex: Yup.string().required('Required'),
  title: Yup.string()
    .min(2, 'Must contain only letters, at least 2 letters, not more then 48 letters')
    .max(48, 'Must contain only letters, at least 2 letters, not more then 48 letters')
    .matches(/^[а-яА-ЯёЁa-zA-Z`\s]+$/, 'Only letters'),
  // .required('Required'),
  name: Yup.string()
    .min(2, 'Must contain only letters, at least 2 letters, not more then 16 letters')
    .max(16, 'Must contain only letters, at least 2 letters, not more then 16 letters')
    .matches(/^[а-яА-ЯёЁa-zA-Z`\s]+$/, 'Only letters'),
  birthday: Yup.date().nullable(),
  breed: Yup.string()
    .min(2, 'Must contain only letters, at least 2 letters, not more then 24 letters')
    .max(24, 'Must contain only letters, at least 2 letters, not more then 24 letters')
    .matches(/^[а-яА-ЯёЁa-zA-Z`\s]+$/, 'Only letters'),
  comments: Yup.string()
    .min(8, 'Must be at least 8 characters, not more then 120 characters')
    .max(120, 'Must be at least 8 characters, not more then 120 characters')
    .matches(/^[а-яА-ЯёЁa-zA-Z1-9`,-_^<>%*$#{}()&:;'"!?\s]+$/)
    .required('Required'),
  price: Yup.number('Price must be a number')
    .positive('Price must be a positive number')
    .integer('Price must be an integer'),
  image: Yup.mixed()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});
export default ValidationSchema;
