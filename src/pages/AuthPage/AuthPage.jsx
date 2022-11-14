import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from 'helpers';
import AuthContainer from 'components/AuthContainer';
import AuthModal from 'components/AuthModal';

const AuthPage = () => {
  const location = useLocation().pathname;
  return (
    <Container>
      <AuthContainer>
        <AuthModal location={location} />
      </AuthContainer>
    </Container>
  );
};

export default AuthPage;
