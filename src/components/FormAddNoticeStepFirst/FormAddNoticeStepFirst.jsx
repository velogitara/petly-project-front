import { ErrorMessage } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Form,
  CategoryBox,
  Label,
  ButtonBox,
  Span,
  InputBox,
  BoxLabel,
  LabelRadio,
  Radio,
  CategoryItem,
  ErrorMessageInput,
} from '../FormAddNotice/FormAddNotice.styled';
import DatePickerField from 'components/DatePickerForm/DatePikerForm';
import { Title } from '../ModalAddNotice/ModalAddNotice.styled';
import Input from 'components/Input';
const categories = [
  { name: 'lost', value: 'lost', id: '1' },
  { name: 'found', value: 'found', id: '2' },
  { name: 'In good hands', value: 'for-free', id: '3' },
  { name: 'sell', value: 'sell', id: '4' },
];

const FormAddNoticeStepFirst = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  onClose,
  setActiveStepIndex,
  setFieldValue,
}) => {
  const [required, setRequired] = useState(null);

  const next = values => {
    if (values.title) {
      setActiveStepIndex(1);
      setRequired(null);
    } else {
      setRequired('Required');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Add pet</Title>
      <CategoryBox>
        {categories.map(category => (
          <CategoryItem key={category.id}>
            <LabelRadio className={values.category === category.value ? 'active' : ''}>
              {category.name}
              <Radio type="radio" name="category" value={category.value} />
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
        {!values.title && <ErrorMessageInput>{required}</ErrorMessageInput>}
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
      <InputBox>
        <BoxLabel>Date of birth</BoxLabel>
        <DatePickerField onChange={setFieldValue} name="birthday" value={values.birthday} />
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
          className="activeNext"
          type="button"
          onClick={() => {
            next(values);
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
    birthday: PropTypes.instanceOf(Date),
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  setActiveStepIndex: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default FormAddNoticeStepFirst;
