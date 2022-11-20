import { Formik } from 'formik';
import * as yup from 'yup';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Button from 'components/Button';

import { Form, InputWrapper } from './AuthForm.styled';

const AuthForm = ({ location }) => {
  const [part, setPart] = useState(1);
  const button = location === '/login' ? 'Login' : 'Register';

  const ValidationSchema = yup.object().shape({});
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
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // setSubmitting(false);
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
          {location === '/login' && (
            <>
              <InputWrapper>
                <Input
                  styled="inputAuth"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  styled="inputAuth"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </InputWrapper>
              <Button type="submit" styled="formAuth on" title={button} />
            </>
          )}
          {location === '/register' && part === 1 && (
            <>
              <InputWrapper>
                <Input
                  styled="inputAuth"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  styled="inputAuth"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  styled="inputAuth"
                  name="confirmPassword"
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
              />
            </>
          )}
          {location === '/register' && part === 2 && (
            <>
              <InputWrapper>
                <Input
                  styled="inputAuth"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  styled="inputAuth"
                  name="location"
                  value={values.location}
                  placeholder="City, region"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
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
                <Button styled="formAuth on" title={button} type="submit" />
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
      )}
    </Formik>
  );
};

AuthForm.propTypes = { location: PropTypes.string.isRequired };

export default AuthForm;
