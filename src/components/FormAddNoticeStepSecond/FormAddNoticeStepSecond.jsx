import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import icons from '../../assets/icons/icons.svg';
import {
  // Comment,
  Textarea,
  Button,
  // Text,
  Form,
  // CategoryBox,
  Label,
  ButtonBox,
  Span,
  InputBox,
  BoxLabel,
  // LabelRadio,
  GenderBox,
  IconBox,
  IconMale,
  IconFemale,
  LabelIcon,
  InputFile,
  IconFile,
  Figure,
  // CategoryItem,
  ErrorMessageInput,
  BoxFlex,
} from '../FormAddNotice/FormAddNotice.styled';

import { Title } from '../ModalAddNotice/ModalAddNotice.styled';
import Input from 'components/Input';
import style from '../FormAddNotice/FormAddNotice.module.css';
import PreviewImage from 'components/PreviewImage/PreviewImage';

const FormAddNoticeStepSecond = ({
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
        <Label className="second-step-margin-title">
          The sex<Span>*</Span>:
        </Label>
        <GenderBox>
          <LabelIcon className={values.gender === 'male' ? 'active' : ''}>
            <Field className={style.radio} type="radio" name="gender" value="male" />
            <IconBox>
              <IconMale>
                <use href={icons + '#icon-sex-male'} />
              </IconMale>
            </IconBox>
            <span> Male</span>
          </LabelIcon>
          <LabelIcon className={values.gender === 'female' ? 'active' : ''}>
            <Field className={style.radio} type="radio" name="gender" value="female" />
            <IconBox>
              <IconFemale>
                <use className="box" href={icons + '#icon-sex-female'} />
              </IconFemale>
            </IconBox>
            <span> Female</span>
          </LabelIcon>
        </GenderBox>
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
        </InputBox>
        {values.category === 'sell' && (
          <InputBox>
            <Label>
              <BoxLabel>
                Price<Span>*</Span>:
              </BoxLabel>
              <Input
                styled="inputAdd"
                name="price"
                type="text"
                placeholder="Type price"
                defaultValue={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Label>
            <ErrorMessage name="price" component={ErrorMessageInput} />
          </InputBox>
        )}
        <InputBox>
          <BoxLabel>Load the pet’s image:</BoxLabel>
          <Label>
            <InputFile type="file" name="image" onChange={image} />
            <BoxFlex>
              <Figure>
                <IconFile>
                  <use href={icons + '#icon-plus'} />
                  {/* {values.image && <use href={icons + '#icon-check'} />} */}
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

FormAddNoticeStepSecond.propTypes = {
  values: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  activeStepIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  setActiveStepIndex: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default FormAddNoticeStepSecond;
