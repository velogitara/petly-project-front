import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { useSignInMutation, useSignUpMutation } from '../../redux/authState/authSlice';

import Button from 'components/Button';
import { StyledForm, InputWrapper, InputForm } from './AuthForm.styled';

const AuthForm = ({ url }) => {
  const [part, setPart] = useState(1);
  const [matchError, setMatchError] = useState(null);
  const [signIn /*result*/] = useSignInMutation();
  const [signUp /*res*/] = useSignUpMutation();

  const button = url === '/login' ? 'Login' : 'Register';
  // console.log(result);
  // console.log(res);

  const passwordRegEx = /^\S*$/;
  // const nameRegEx = /^([a-zA-Z]{2,}\s*(-*){2}[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;/
  const nameRegEx = /^[а-яА-ЯёЁa-zA-Z-`\s]+$/;
  const locationRegEx = /^(\w+(-*)(\s*)\w+(,)\s*)+\w+$/;
  const phoneRegEx = /^(\+\d{2}[- ]?)?\d{10}$/;

  const checkFields = values => {
    if (values.email && values.password) {
      if (values.password !== values.confirmPassword) {
        setMatchError('Passwords must be the same');
      } else if (values.email.length < 2) {
        return;
      } else if (values.password.length < 7 && values.confirmPassword.length < 7) {
        return;
      } else {
        setPart(2);
        setMatchError(null);
      }
    } else {
      setMatchError('All fields are required');
    }
  };
  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup
      .string()
      .matches(passwordRegEx, 'Password must contain letters or digits, without spaces')
      .min(7, 'Must contain at least 7 symbols')
      .max(32, 'Must contain at max 32 symbols!')
      .required('Required'),
  });
  const registerSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup
      .string()
      .matches(passwordRegEx, 'Password must contain letters or digits, without spaces')
      .min(7, 'Must contain at least 7 symbols')
      .max(32, 'Must contain at max 32 symbols!')
      .required('Required'),
    confirmPassword: yup.string().required('Required'),
    name: yup
      .string()
      .matches(nameRegEx, 'Must contain only letters, at least 2 letters, not more then 70 letters')
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    location: yup.string().matches(locationRegEx, 'Type in format "City, State"'),
    mobilePhone: yup
      .string()
      .matches(phoneRegEx, 'Must be in format "+380991234500"')
      .required('Required'),
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
      validationSchema={url === '/login' ? loginSchema : registerSchema}
      onSubmit={async ({ email, password, name, location, mobilePhone: phone }) => {
        const fields = { email, password, name, location, phone };
        let data = {};
        for (const key in fields) {
          if (fields[key] !== '') {
            data[key] = fields[key];
          }
        }
        // console.log(data);

        try {
          if (url === '/login') {
            await signIn(data).then(response => {
              if (response.error) {
                toast.error(response.error.data.message);
              }
            });
          } else {
            await signUp(data).then(response => {
              if (response.error) {
                toast.error(response.error.data.message);
              }
            });
          }
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          {url === '/login' && (
            <>
              <InputWrapper>
                <InputForm
                  styled="inputAuth"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>
                <InputForm
                  styled="inputAuth"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>
              </InputWrapper>
              <Button type="submit" styled="formAuth on" title={button} />
            </>
          )}
          {url === '/register' && part === 1 && (
            <>
              <InputWrapper>
                <InputForm
                  styled="inputAuth"
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>
                <InputForm
                  styled="inputAuth"
                  name="password"
                  value={values.password}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>
                <InputForm
                  styled="inputAuth"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>
                <div>{matchError}</div>
              </InputWrapper>
              <Button
                type="button"
                styled="formAuth back"
                title="Next"
                onClick={() => {
                  checkFields(values);
                }}
              />
            </>
          )}
          {url === '/register' && part === 2 && (
            <>
              <InputWrapper>
                <InputForm
                  styled="inputAuth"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="name">{msg => <div>{msg}</div>}</ErrorMessage>
                <InputForm
                  styled="inputAuth"
                  name="location"
                  value={values.location}
                  placeholder="City, region"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="location">{msg => <div>{msg}</div>}</ErrorMessage>
                <InputForm
                  styled="inputAuth"
                  name="mobilePhone"
                  value={values.mobilePhone}
                  placeholder="Mobile phone"
                  type="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="mobilePhone">{msg => <div>{msg}</div>}</ErrorMessage>
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
        </StyledForm>
      )}
    </Formik>
  );
};

AuthForm.propTypes = { url: PropTypes.string.isRequired };

export default AuthForm;
