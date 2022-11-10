import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthLink = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
