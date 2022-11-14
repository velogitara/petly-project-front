import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Button from 'components/Button';

import { Form, InputWrapper } from './AuthForm.styled';

const AuthForm = ({ location }) => {
  const [part, setPart] = useState(1);
  const button = location === '/login' ? 'Login' : 'Register';

  return (
    <Form>
      {location === '/login' && (
        <>
          <InputWrapper>
            <Input styled="inputAuth" placeholder="Email" type="email" />
            <Input styled="inputAuth" placeholder="Password" type="password" />
          </InputWrapper>
          <Button type="submit" styled="formAuth on" title={button} />
        </>
      )}
      {location === '/register' && part === 1 && (
        <>
          <InputWrapper>
            <Input styled="inputAuth" placeholder="Email" type="email" />
            <Input styled="inputAuth" placeholder="Password" type="password" />
            <Input styled="inputAuth" placeholder="Confirm Password" type="password" />
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
            <Input styled="inputAuth" placeholder="Name" type="text" />
            <Input styled="inputAuth" placeholder="City, region" type="text" />
            <Input styled="inputAuth" placeholder="Mobile phone" type="tel" />
          </InputWrapper>
          <InputWrapper>
            <Button styled="formAuth on" title={button} type="submit" />
            <Button styled="formAuth back" title="Back" type="button" onClick={() => setPart(1)} />
          </InputWrapper>
        </>
      )}
    </Form>
  );
};

AuthForm.propTypes = { location: PropTypes.string.isRequired };

export default AuthForm;
