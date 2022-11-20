import { Field, Formik } from 'formik';
// import * as Yup from 'yup';

// import PropTypes from 'prop-types';
// import Input from 'components/Input';
// import Button from 'components/Button';

import { Form, InputWrapper } from '../AuthForm/AuthForm.styled';
import { useSignInMutation } from '../../redux/authState/authSlice';

const AuthLoginForm = () => {
  //   const ValidationSchema = Yup.object().shape({});
  const [signIn, result] = useSignInMutation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //   validationSchema={ValidationSchema}
      onSubmit={async values => {
        const data = { ...values };
        await signIn(data);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Field
                styled="inputAuth"
                name="email"
                value={values.email}
                placeholder="Email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                styled="inputAuth"
                name="password"
                value={values.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputWrapper>
            <button type="submit" styled="formAuth on" title="Login" disabled={result.isLoading}>
              Login
            </button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AuthLoginForm;
