import { Field, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useState } from 'react';
// import PropTypes from 'prop-types';
// import Input from 'components/Input';
import Button from 'components/Button';

import { Form, InputWrapper } from '../AuthForm/AuthForm.styled';

const AuthFormRegister = () => {
  const [part, setPart] = useState(1);

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Required'),
    password: yup
      .string()
      .min(7, 'Must be 7 or more characters')
      .max(32, 'Must be 32 or less characters')
      .matches(/^[\s]+$/, ''),
    //   .required('Required'),
    name: yup
      .string()
      .min(2, 'Must be 2 or more letter')
      .max(16, 'Must be 16 or less letter')
      .matches(/^[A-Za-zА`\s]+$/, 'Only letters'),
    location: yup.string().matches(/^[A-Za-zА`\s]+$/, 'Only letters'),
    mobilePhone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point"),
    //   .matches(
    //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //   ),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        location: '',
        mobilePhone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // setSubmitting(false);
        const data = values;
        console.log(values);
        return data;
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <>
          <Form onSubmit={handleSubmit}>
            {part === 1 && (
              <>
                <InputWrapper>
                  <div>
                    <Field
                      styled="inputAuth"
                      name="email"
                      // defaultValue={values.email}
                      value={values.email}
                      placeholder="Email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>
                  </div>
                  <Field
                    styled="inputAuth"
                    name="password"
                    // defaultValue={values.password}
                    value={values.password}
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    styled="inputAuth"
                    name="confirmPassword"
                    // defaultValue={values.confirmPassword}
                    value={values.confirmPassword}
                    placeholder="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrapper>
                <Button
                  type="button"
                  styled="formAuth back"
                  title="Next"
                  onClick={() => {
                    setPart(2);
                  }}
                  disabled={true}
                />
              </>
            )}
            {part === 2 && (
              <>
                <InputWrapper>
                  <Field
                    styled="inputAuth"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    styled="inputAuth"
                    name="location"
                    value={values.location}
                    placeholder="City, region"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    styled="inputAuth"
                    name="mobilePhone"
                    value={values.mobilePhone}
                    placeholder="Mobile phone"
                    type="tel"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Button styled="formAuth on" title="Register" type="submit" />
                  <Button
                    styled="formAuth back"
                    title="Back"
                    type="button"
                    onClick={() => setPart(1)}
                  />
                </InputWrapper>
              </>
            )}
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AuthFormRegister;
