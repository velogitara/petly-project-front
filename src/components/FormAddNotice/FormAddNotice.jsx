import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import icons from '../../assets/icons/icons.svg';
import {
  Input,
  Button,
  Text,
  Form,
  CategoryBox,
  Label,
  ButtonBox,
  Span,
  InputBox,
  BoxLabel,
  LabelRadio,
  GenderBox,
  IconBox,
  IconMale,
  IconFemale,
  LabelIcon,
  InputFile,
  IconFile,
  Figure,
  CategoryItem,
} from './FormAddNotice.styled';
import { Title } from '../ModalAddNotice/ModalAddNotice.styled';
import * as yup from 'yup';
import style from './FormAddNotice.module.css';

const categories = [
  { name: 'lost', id: '1' },
  { name: 'found', id: '2' },
  { name: 'In good hands', id: '3' },
  { name: 'sell', id: '4' },
];
// const input = [
//   { name: 'Tittle of ad', id: '1' },
//   { name: 'Name pet', id: '2' },
//   { name: 'Date of birth', id: '3' },
//   { name: 'Tittle of ad', id: '4' },
// ];
function FormAddNotice({ onClose }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const ValidationSchema = yup.object().shape({
    titleOfAd: yup.string().required(),
    namePet: yup.string().required(),
    dateOfBirth: yup.string().required(),
    breed: yup.string().required(),
    theSex: yup.string().required(),
    comments: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        titleOfAd: '',
        namePet: '',
        dateOfBirth: '',
        breed: '',
        category: '',
        theSex: ''.toLowerCase(),
        location: '',
        image: null,
        price: '',
        comments: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={values => {
        const preData = { ...formData, ...values };
        // preData.theSex = preData.theSex.toLowerCase();
        console.log(preData);
        // setFormData(data);
        onClose();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <>
          {activeStepIndex === 0 && (
            <Form onSubmit={handleSubmit}>
              <Title>Add pet</Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </Text>
              <CategoryBox role="group" aria-labelledby="my-radio-group">
                {categories.map(category => (
                  <CategoryItem key={category.id}>
                    <LabelRadio className={values.category === category.name ? 'active' : ''}>
                      {category.name}
                      <Field
                        className={style.radio}
                        type="radio"
                        name="category"
                        value={category.name}
                      />
                    </LabelRadio>
                  </CategoryItem>
                ))}
              </CategoryBox>
              <InputBox>
                <Label>
                  <BoxLabel>Tittle of ad</BoxLabel>
                  <Input
                    name="titleOfAd"
                    type="text"
                    placeholder="Type name"
                    value={values.titleOfAd}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Label>
              </InputBox>
              <InputBox>
                <Label>
                  <BoxLabel>Name pet</BoxLabel>
                  <Input
                    name="namePet"
                    type="text"
                    placeholder="Type name pet"
                    value={values.namePet}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Label>
              </InputBox>
              <InputBox>
                <Label>
                  <BoxLabel>Date of birth</BoxLabel>
                  <Input
                    styled="inputAdd"
                    name="dateOfBirth"
                    placeholder="Type date of birth"
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
              </InputBox>
              <ButtonBox>
                <Button
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
          )}
          {activeStepIndex === 1 && (
            <Form onSubmit={handleSubmit}>
              <Title className="title">Add pet</Title>
              <Label className="second-step-margin-title">
                The sex<Span>*</Span>:
              </Label>
              <GenderBox role="group" aria-labelledby="my-radio-group">
                <LabelIcon className={values.theSex === 'Male' ? 'active' : ''}>
                  <Field className={style.radio} type="radio" name="theSex" value="male" />
                  <IconBox>
                    <IconMale>
                      <use href={icons + '#icon-sex-male'} />
                    </IconMale>
                  </IconBox>
                  <span> Male</span>
                </LabelIcon>
                <LabelIcon className={values.theSex === 'Female' ? 'active' : ''}>
                  <Field className={style.radio} type="radio" name="theSex" value="female" />
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
                    placeholder="Type location"
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
                </InputBox>
              )}
              <InputBox>
                <Label>
                  <InputFile type="file" name="image" />
                  <BoxLabel>Load the pet’s image:</BoxLabel>
                  <Figure>
                    <IconFile>
                      <use href={icons + '#icon-plus'} />
                    </IconFile>
                  </Figure>
                </Label>
              </InputBox>
              <Label>
                <BoxLabel> Comments</BoxLabel>
                <Input
                  className="comment"
                  type="text"
                  name="comments"
                  placeholder="Type comment"
                  defaultValue={values.comments}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Label>
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
          )}
        </>
      )}
    </Formik>
  );
}

export default FormAddNotice;
