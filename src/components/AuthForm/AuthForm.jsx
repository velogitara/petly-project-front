// import { Field, Formik } from 'formik';
// import * as Yup from 'yup';

import AuthRegisterForm from '../AuthRegisterForm';
import AuthLoginForm from 'components/AuthLoginForm';

// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import Input from 'components/Input';
// import Button from 'components/Button';

// import { Form, InputWrapper } from './AuthForm.styled';

const AuthForm = ({ location }) => {
  // const handleRegistration = async values => {
  //   try {
  //     await signUp(values);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //   const [part, setPart] = useState(1);
  //   const button = location === '/login' ? 'Login' : 'Register';
  //   const ValidationSchema = Yup.object().shape({});

  return (
    <>
      {location === '/login' && <AuthLoginForm />}
      {location === '/register' && <AuthRegisterForm />}
    </>
  );
};

export default AuthForm;
