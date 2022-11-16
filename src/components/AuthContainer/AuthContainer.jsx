import React from 'react';

import { AuthSection } from './AuthContainer.styled';

const AuthContainer = ({ children }) => {
  return <AuthSection>{children}</AuthSection>;
};
export default AuthContainer;
