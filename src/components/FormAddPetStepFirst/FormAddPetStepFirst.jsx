import { ErrorMessage } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Form,
  Label,
  ButtonBox,
  InputBox,
  BoxLabel,
  ErrorMessageInput,
} from '../FormAddNotice/FormAddNotice.styled';
import DatePickerField from 'components/DatePickerForm/DatePikerForm';
import { Title } from '../ModalAddNotice/ModalAddNotice.styled';
import Input from 'components/Input';

const FormAddPetStepFirst = ({
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
    if (values.name && values.birthday) {
      setActiveStepIndex(1);
      setRequired(null);
    } else {
      setRequired('Required');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Add pet</Title>
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
        {!values.name && <ErrorMessageInput>{required}</ErrorMessageInput>}
      </InputBox>
      <InputBox>
        <Label>
          <BoxLabel>Date of birth</BoxLabel>

          <DatePickerField onChange={setFieldValue} name="birthday" value={values.birthday} />
        </Label>
        {!values.birthday && <ErrorMessageInput>{required}</ErrorMessageInput>}
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

FormAddPetStepFirst.propTypes = {
  values: PropTypes.shape({
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

export default FormAddPetStepFirst;
