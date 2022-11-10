import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavigationLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent};
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:not(:last-child) {
    margin-right: 80px;
  }
  &.current {
    color: ${({ theme }) => theme.palette.accent};
    text-decoration-line: underline;
  }
`;
