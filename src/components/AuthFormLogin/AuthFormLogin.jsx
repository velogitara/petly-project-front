import { Field, Formik } from 'formik';
// import * as Yup from 'yup';

// import PropTypes from 'prop-types';
// import Input from 'components/Input';
import Button from 'components/Button';

import { Form, InputWrapper } from '../AuthForm/AuthForm.styled';

const AuthFormLogin = () => {
  //   const ValidationSchema = Yup.object().shape({});

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //   validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // setSubmitting(false);
        console.log(values);
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
            <Button type="submit" styled="formAuth on" title="Login" />
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AuthFormLogin;
