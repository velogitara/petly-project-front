import { Formik } from 'formik';
import PropTypes from 'prop-types';
import DatePickerField from 'components/DatePickerForm/DatePikerForm';
import {
  Title,
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
import Input from 'components/Input';
import { ValidationSchemaFirstStep } from '../FormAddNoticeValidation';
const categories = [
  { name: 'lost', value: 'lost', id: '1' },
  { name: 'found', value: 'found', id: '2' },
  { name: 'In good hands', value: 'for-free', id: '3' },
  { name: 'sell', value: 'sell', id: '4' },
];

const FormAddNoticeStepFirst = ({ onClose, setActiveStepIndex, setFormData, formData }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        name: '',
        birthday: '',
        breed: '',
        category: '',
      }}
      validationSchema={ValidationSchemaFirstStep}
      onSubmit={values => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(1);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
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
          <ErrorMessageInput>{errors.category}</ErrorMessageInput>
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
            <ErrorMessageInput>{errors.title}</ErrorMessageInput>
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
            <ErrorMessageInput>{errors.name}</ErrorMessageInput>
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
            <ErrorMessageInput>{errors.breed && touched.breed}</ErrorMessageInput>
          </InputBox>
          <ButtonBox>
            <Button className="activeNext" type="submit">
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
      )}
    </Formik>
  );
};

FormAddNoticeStepFirst.propTypes = {
  onClose: PropTypes.func.isRequired,
  setActiveStepIndex: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormAddNoticeStepFirst;
