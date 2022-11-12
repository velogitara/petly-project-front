import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavigationLink = styled(NavLink)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent};
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:not(:last-child) {
    margin-right: 80px;
  }
  &.active {
    color: ${({ theme }) => theme.palette.accent};
    text-decoration-line: underline;
  }

	text-decoration: none;
  color: inherit;
`;
