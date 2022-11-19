// import { Field, Formik } from 'formik';
// import * as Yup from 'yup';

import AuthFormRegister from '../AuthRegisterForm';
import AuthFormLogin from 'components/AuthFormLogin';

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
      {location === '/login' && <AuthFormLogin />}
      {location === '/register' && <AuthFormRegister />}
    </>
  );
};

export default AuthForm;
