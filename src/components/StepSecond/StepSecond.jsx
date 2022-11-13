import { Formik } from 'formik';
import React, { useContext } from 'react';
import { FormContext } from '../FormAddNotice/FormAddNotice';
import { Button, Label, ButtonBox, Radio, Form } from '../FormAddNotice/FormAddNotice.styled';
// import icon from '../../assets/icons/';
import Input from 'components/Input';
import * as yup from 'yup';

function StepSecond() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } = useContext(FormContext);

  // const renderError = message => <p className="italic text-red-600">{message}</p>;

  const ValidationSchema = yup.object().shape({
    theSex: yup.string().required(),
    comments: yup.string().required(),
  });

  // return (
  //   <Formik
  //     initialValues={{
  //       theSex: '',
  //       image: null,
  //       price: '',
  //       comments: '',
  //     }}
  //     validationSchema={ValidationSchema}
  //     onSubmit={values => {
  //       const data = { ...formData, ...values };
  //       setFormData(data);
  //       setActiveStepIndex(activeStepIndex);
  //     }}
  //   >
  //     <Form className="flex flex-col justify-center items-center">
  //       <div role="group" aria-labelledby="my-radio-group">
  //         The sex:
  //         <Radio type="radio" name="theSex" value="Male" />
  //         {/* <svg>
  //           <use href="#${id}" />
  //         </svg> */}
  //         <label> Male</label>
  //         <Radio type="radio" name="theSex" value="Female" />
  //         <label>Female</label>
  //       </div>
  //       <Label>Location*:</Label>
  //       <Input
  //         styled="inputAdd"
  //         name="breed"
  //         type="text"
  //         placeholder="Type location"
  //         component={Input}
  //       />
  //       <Label>Price*:</Label>
  //       <Field
  //         styled="inputAdd"
  //         name="price"
  //         type="text"
  //         placeholder="Type price"
  //         component={Input}
  //       />
  //       <Label>Load the pet’s image:</Label>
  //       <Field type="file" name="image" />
  //       <Label>Comments </Label>
  //       <Field
  //         styled="inputAdd"
  //         type="text"
  //         name="comments"
  //         // component="textarea"
  //         placeholder="Type comment"
  //         component={Input}
  //       />
  //       <ButtonBox>
  //         <Button
  //           className="formAddPet"
  //           type="button"
  //           onClick={() => {
  //             setActiveStepIndex(activeStepIndex - 1);
  //           }}
  //         >
  //           Back
  //         </Button>
  //         <Button className="active" type="submit">
  //           Done
  //         </Button>
  //       </ButtonBox>
  //     </Form>
  //   </Formik>
  // );
  return (
    <Formik
      initialValues={{
        theSex: '',
        location: '',
        image: null,
        price: '',
        comments: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={values => {
        const data = { ...formData, ...values };
        setFormData(data);
        console.log(data);
        // setActiveStepIndex(activeStepIndex);
      }}
    >
      {({ touched, errors, values, handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div role="group" aria-labelledby="my-radio-group">
            The sex:
            <Radio type="radio" name="theSex" value="Male" />
            {/* <svg>
            <use href="#${id}" />
          </svg> */}
            <label> Male</label>
            <Radio type="radio" name="theSex" value="Female" />
            <label>Female</label>
          </div>
          <Label>Location*:</Label>
          <Input
            styled="inputAdd"
            name="location"
            type="text"
            placeholder="Type location"
            defaultValue={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Label>Price*:</Label>
          <Input
            styled="inputAdd"
            name="price"
            type="text"
            placeholder="Type price"
            defaultValue={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Label>Load the pet’s image:</Label>
          <Input type="file" name="image" />
          <Label>Comments </Label>
          <Input
            styled="inputAdd"
            type="text"
            name="comments"
            // component="textarea"
            placeholder="Type comment"
            defaultValue={values.comments}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ButtonBox>
            <Button
              className="formAddPet"
              type="button"
              onClick={() => {
                setActiveStepIndex(activeStepIndex - 1);
              }}
            >
              Back
            </Button>
            <Button className="active" type="submit">
              Done
            </Button>
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
}

export default StepSecond;
