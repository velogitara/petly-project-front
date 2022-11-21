import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import {
  // Comment,
  // Textarea,
  Button,
  // Text,
  Form,
  CategoryBox,
  Label,
  ButtonBox,
  Span,
  InputBox,
  BoxLabel,
  LabelRadio,
  // GenderBox,
  // IconBox,
  // IconMale,
  // IconFemale,
  // LabelIcon,
  // InputFile,
  // IconFile,
  // Figure,
  CategoryItem,
  ErrorMessageInput,
  // BoxFlex,
} from '../FormAddNotice/FormAddNotice.styled';
import DatePickerField from 'components/DatePickerForm/DatePikerForm';
import { Title } from '../ModalAddNotice/ModalAddNotice.styled';
import Input from 'components/Input';
import style from '../FormAddNotice/FormAddNotice.module.css';
const categories = [
  { name: 'lost', value: 'lost', id: '1' },
  { name: 'found', value: 'found', id: '2' },
  { name: 'In good hands', value: 'for-free', id: '3' },
  { name: 'sell', value: 'sell', id: '4' },
];

// const disabled = () => {
//   let disabled = true;
//   if (values.title) {
//     disabled === false;
//   }
// };
const FormAddNoticeStepFirst = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  activeStepIndex,
  onClose,
  setActiveStepIndex,
  setFieldValue,
  errors,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Add pet</Title>
      <CategoryBox>
        {categories.map(category => (
          <CategoryItem key={category.id}>
            <LabelRadio className={values.category === category.value ? 'active' : ''}>
              {category.name}
              <Field className={style.radio} type="radio" name="category" value={category.value} />
            </LabelRadio>
          </CategoryItem>
        ))}
      </CategoryBox>
      <InputBox>
        <Label>
          <BoxLabel>
            Tittle of ad<Span>*</Span>
          </BoxLabel>
          <Input
            styled="inputAdd"
            name="title"
            type="text"
            placeholder="Type name"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Label>
        <ErrorMessage name="title" component={ErrorMessageInput} />
      </InputBox>
      <InputBox>
        <Label>
          <BoxLabel>Name pet</BoxLabel>
          <Input
            styled="inputAdd"
            name="name"
            type="text"
            placeholder="Type name pet"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Label>
        <ErrorMessage name="name" component={ErrorMessageInput} />
      </InputBox>
      <InputBox className={style.calendar}>
        <Label>
          <BoxLabel>Date of birth</BoxLabel>
          <DatePickerField
            className={style.datepicker}
            onChange={setFieldValue}
            name="birthday"
            value={values.birthday}
          />
        </Label>
      </InputBox>
      <InputBox className="label">
        <Label>
          <BoxLabel>Breed</BoxLabel>
          <Input
            styled="inputAdd"
            name="breed"
            type="text"
            placeholder="Type breed"
            value={values.breed}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Label>
        <ErrorMessage name="breed" component={ErrorMessageInput} />
      </InputBox>
      <ButtonBox>
        <Button
          // disabled={disabled}
          className="activeNext"
          type="button"
          onClick={() => {
            setActiveStepIndex(activeStepIndex + 1);
          }}
        >
          Next
        </Button>
        <Button
          className="formAddPet"
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </Button>
      </ButtonBox>
    </Form>
  );
};

FormAddNoticeStepFirst.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    // birthday: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  activeStepIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  setActiveStepIndex: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default FormAddNoticeStepFirst;
