import React from 'react';
import { Content } from './HomeContainer.styled';

const HomeContainer = ({ children }) => {
  return <Content>{children}</Content>;
};

export default HomeContainer;
