import { /* ErrorMessage,*/ Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { ValidationSchemaSecondStep } from '../FormAddNoticeValidation';
import Input from 'components/Input';
import PreviewImage from 'components/AddNotice/PreviewImage/PreviewImage';

import icons from 'assets/icons/icons.svg';
import {
  Form,
  Label,
  Span,
  Textarea,
  Button,
  BoxLabel,
  ButtonBox,
  InputBox,
  GenderBox,
  IconBox,
  IconMale,
  IconFemale,
  LabelIcon,
  InputFile,
  IconFile,
  Figure,
  ErrorMessageInput,
  BoxFlex,
  Box,
  Radio,
  Title,
} from '../FormAddNotice/FormAddNotice.styled';

const FormAddNoticeStepSecond = ({ setActiveStepIndex, addNotice, onClose, formData }) => {
  const submitAddNoticeForm = async data => {
    const { image, ...values } = data;

    if (values.birthday) {
      values.birthday = new Date(
        values.birthday.getTime() - values.birthday.getTimezoneOffset() * 60000
      ).toISOString();
      console.log(data.birthday);
    }
    if (!values.name) {
      values.name = 'No name';
    }
    if (!values.birthday) {
      values.birthday = '0000';
    }
    if (!values.breed) {
      values.breed = 'outbreed';
    }
    if (!values.price) {
      values.price = 0;
    }

    const payload = new FormData();
    payload.append('image', image);
    payload.append('data', JSON.stringify(values));
    onClose();
    try {
      await addNotice({ payload }).then(response => {
        if (response.error) {
          toast.error(response.error.data.message);
        }
        if (response.data) {
          toast.success(response?.data?.message ?? 'Success');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        sex: '',
        location: '',
        price: '',
        image: null,
        comments: '',
      }}
      validationSchema={ValidationSchemaSecondStep}
      onSubmit={values => {
        const data = { ...formData, ...values };
        submitAddNoticeForm(data);

        console.log(values);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isValid,
        dirty,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Title className="title">Add pet</Title>
          <Label className="second-step-margin-title">
            The sex<Span>*</Span>:
          </Label>
          <GenderBox>
            <LabelIcon className={values.sex === 'male' ? 'active' : ''}>
              <Radio type="radio" name="sex" value="male" />
              <IconBox>
                <IconMale>
                  <use href={icons + '#icon-sex-male'} />
                </IconMale>
              </IconBox>
              <span>Male</span>
            </LabelIcon>
            <LabelIcon className={values.sex === 'female' ? 'active' : ''}>
              <Radio type="radio" name="sex" value="female" />
              <IconBox>
                <IconFemale>
                  <use className="box" href={icons + '#icon-sex-female'} />
                </IconFemale>
              </IconBox>
              <span>Female</span>
            </LabelIcon>
          </GenderBox>
          <ErrorMessageInput>{errors.sex}</ErrorMessageInput>
          <InputBox>
            <Label>
              <BoxLabel>
                Location<Span>*</Span>:
              </BoxLabel>
              <Input
                styled="inputAdd"
                name="location"
                type="text"
                placeholder="City, Region"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Label>
            <ErrorMessageInput>{errors.location}</ErrorMessageInput>
          </InputBox>
          {formData.category === 'sell' && (
            <InputBox>
              <Label>
                <BoxLabel>
                  Price<Span>*</Span>:
                </BoxLabel>
                <Input
                  styled="inputAdd"
                  name="price"
                  type="text"
                  value={values.price}
                  placeholder="Type price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Label>
              <ErrorMessageInput>{errors.price}</ErrorMessageInput>
            </InputBox>
          )}
          <InputBox className="file">
            <BoxLabel>Load the pet’s image:</BoxLabel>
            <Box>
              <Label>
                <InputFile
                  type="file"
                  name="image"
                  onChange={event => {
                    setFieldValue('upload', event.currentTarget.files);
                  }}
                />
                <BoxFlex>
                  <Figure>
                    <IconFile>
                      <use href={icons + '#icon-plus-big'} />
                    </IconFile>
                  </Figure>
                  {values.image && <PreviewImage image={values.image} />}
                </BoxFlex>
              </Label>
            </Box>
            <ErrorMessageInput>{errors.image}</ErrorMessageInput>
          </InputBox>
          <Label>
            <BoxLabel>
              Comments<Span>*</Span>
            </BoxLabel>
            <Textarea
              type="text"
              name="comments"
              placeholder="Type comment"
              defaultValue={values.comments}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Label>
          <ErrorMessageInput>{errors.comments}</ErrorMessageInput>
          <ButtonBox>
            {dirty && isValid ? (
              <Button className="activeDone" type="submit">
                Done
              </Button>
            ) : (
              <Button className="inactiveDone" disabled={true}>
                Done
              </Button>
            )}
            <Button
              className="formAddPet"
              type="button"
              onClick={() => {
                setActiveStepIndex(0);
              }}
            >
              Back
            </Button>
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
};

FormAddNoticeStepSecond.propTypes = {
  setActiveStepIndex: PropTypes.func.isRequired,
  addNotice: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormAddNoticeStepSecond;
