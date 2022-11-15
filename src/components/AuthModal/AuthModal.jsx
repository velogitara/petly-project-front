import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from 'components/AuthForm';

import { Auth, Title, Message, AuthLink } from './AuthModal.styled';

const AuthModal = ({ location }) => {
  const content =
    location === '/login'
      ? { title: 'Login', mes: "Don't have an account? ", link: 'Register', linkTo: '/register' }
      : {
          title: 'Registration',
          mes: 'Already have an account?',
          link: 'Login',
          linkTo: '/login',
        };
  return (
    <Auth>
      <Title>{content.title}</Title>
      <AuthForm location={location} />
      <Message>
        {content.mes}
        <AuthLink to={content.linkTo}>{content.link}</AuthLink>
      </Message>
    </Auth>
  );
};

AuthModal.propTypes = { location: PropTypes.string.isRequired };

export default AuthModal;
