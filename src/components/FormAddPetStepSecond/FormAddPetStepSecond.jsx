import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import icons from '../../assets/icons/icons.svg';
import {
  Form,
  Label,
  Textarea,
  Button,
  BoxLabel,
  ButtonBox,
  InputBox,
  InputFile,
  IconFile,
  Figure,
  ErrorMessageInput,
  BoxFlex,
} from '../FormAddNotice/FormAddNotice.styled';

import { Title } from '../FormAddPet/FormAddPet.styled';
import PreviewImage from 'components/PreviewImage/PreviewImage';

const FormAddPetStepSecond = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  activeStepIndex,
  setActiveStepIndex,
  setFieldValue,
}) => {
  const image = event => {
    const file = event.currentTarget.files[0];
    setFieldValue('image', file, file.name);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title className="title">Add pet</Title>
        <InputBox className="file">
          <BoxLabel className="user">Load the pet’s image:</BoxLabel>
          <Label>
            <InputFile type="file" name="image" onChange={image} />
            <BoxFlex className="user">
              <Figure>
                <IconFile>
                  <use href={icons + '#icon-plus-big'} />
                </IconFile>
              </Figure>
              {values.image && <PreviewImage image={values.image} />}
            </BoxFlex>
          </Label>
          <ErrorMessage name="image" component={ErrorMessageInput} />
        </InputBox>
        <Label>
          <BoxLabel>Comments</BoxLabel>
          <Textarea
            type="text"
            name="comments"
            placeholder="Type comment"
            defaultValue={values.comments}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Label>
        <ErrorMessage name="comments" component={ErrorMessageInput} />
        <ButtonBox>
          <Button className="activeDone" type="submit">
            Done
          </Button>
          <Button
            className="formAddPet"
            type="button"
            onClick={() => {
              setActiveStepIndex(activeStepIndex - 1);
            }}
          >
            Back
          </Button>
        </ButtonBox>
      </Form>
    </>
  );
};

FormAddPetStepSecond.propTypes = {
  values: PropTypes.shape({
    comments: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  activeStepIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  setActiveStepIndex: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default FormAddPetStepSecond;
