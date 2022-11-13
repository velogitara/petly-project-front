import { Field, Formik } from 'formik';
import React, { useContext } from 'react';
import { FormContext } from '../FormAddNotice/FormAddNotice';
import { Input } from '../FormAddNotice/FormAddNotice.styled';
import {
  Button,
  Text,
  Form,
  CategoryBox,
  Label,
  ButtonBox,
} from '../FormAddNotice/FormAddNotice.styled';
import * as yup from 'yup';

function StepFirst({ onClose }) {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);

  // const renderError = message => <p className="italic text-red-600">{message}</p>;

  const ValidationSchema = yup.object().shape({
    titleOfAd: yup.string().required(),
    namePet: yup.string().required(),
    dateOfBirth: yup.string().required(),
    breed: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        titleOfAd: '',
        namePet: '',
        dateOfBirth: '',
        breed: '',
        category: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={values => {
        const data = { ...formData, ...values };
        console.log(data);
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          </Text>
          <CategoryBox role="group" aria-labelledby="my-radio-group">
            <label>
              lost/found
              <Input type="radio" values="category" value="lost/found" />
            </label>
            <label>
              In good hands
              <Field type="radio" name="category" value=" In good hands" />
            </label>
            <label>
              sell
              <Field type="radio" name="category" value="sell" />
            </label>
          </CategoryBox>
          <Label>Tittle of ad </Label>
          <Input
            styled="inputAdd"
            onChange={handleChange}
            onBlur={handleBlur}
            name="titleOfAd"
            defaultValue={values.titleOfAd}
            type="text"
            placeholder="Type name"
            // component={Input}
          />
          <Label>Name pet </Label>
          <Input
            styled="inputAdd"
            name="namePet"
            type="text"
            placeholder="Type name pet"
            defaultValue={values.namePet}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Label>Date of birth </Label>
          <Input
            styled="inputAdd"
            name="dateOfBirth"
            placeholder="Type date of birth"
            defaultValue={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Label>Breed </Label>
          <Input
            styled="inputAdd"
            name="breed"
            type="text"
            placeholder="Type breed"
            defaultValue={values.breed}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <ButtonBox>
            <Button
              className="formAddPet"
              type="button"
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              className="active"
              type="submit"
              onClick={() => {
                setActiveStepIndex(currStep => currStep + 1);
              }}
            >
              Next
            </Button>
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
  // return (
  //   <Formik
  //     initialValues={{
  //       titleOfAd: '',
  //       namePet: '',
  //       dateOfBirth: '',
  //       breed: '',
  //       category: '',
  //     }}
  //     validationSchema={ValidationSchema}
  //     onSubmit={values => {
  //       const data = { ...formData, ...values };
  //       console.log(data);
  //       setFormData(data);
  //       // setActiveStepIndex(activeStepIndex + 1);
  //     }}
  //   >
  //     <Form className="flex flex-col justify-center items-center">
  //       <Text>
  //         Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
  //       </Text>
  //       <CategoryBox role="group" aria-labelledby="my-radio-group">
  //         <label>
  //           lost/found
  //           <Field type="radio" name="category" value="lost/found" />
  //         </label>
  //         <label>
  //           In good hands
  //           <Field type="radio" name="category" value=" In good hands" />
  //         </label>
  //         <label>
  //           sell
  //           <Field type="radio" name="category" value="sell" />
  //         </label>
  //       </CategoryBox>
  //       <Label>Tittle of ad </Label>
  //       <Field
  //         styled="inputAdd"
  //         name="titleOfAd"
  //         type="text"
  //         placeholder="Type name"
  //         component={Input}
  //       />
  //       <Label>Name pet </Label>
  //       <Field
  //         styled="inputAdd"
  //         name="namePet"
  //         type="text"
  //         placeholder="Type name pet"
  //         component={Input}
  //       />

  //       <Label>Date of birth </Label>
  //       <Field
  //         styled="inputAdd"
  //         name="dateOfBirth"
  //         placeholder="Type date of birth"
  //         component={Input}
  //       />

  //       <Label>Breed </Label>
  //       <Field
  //         styled="inputAdd"
  //         name="breed"
  //         type="text"
  //         placeholder="Type breed"
  //         component={Input}
  //       />

  //       <ButtonBox>
  //         <Button className="formAddPet" type="button">
  //           Cancel
  //         </Button>
  //         <Button
  //           className="active"
  //           type="submit"
  //           onClick={() => {
  //             setActiveStepIndex(currStep => currStep + 1);
  //           }}
  //         >
  //           Next
  //         </Button>
  //       </ButtonBox>
  //     </Form>
  //   </Formik>
  // );
}

export default StepFirst;
