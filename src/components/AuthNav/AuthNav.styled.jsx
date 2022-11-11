import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 28px;
  border-radius: 40px;
  height: 47px;
  color: inherit;
  background: ${({ theme }) => theme.palette.triadic};
  border: 2px solid ${({ theme }) => theme.palette.accent};

	&:hover,
  &:focus {
		opacity: 0.9;
		transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: ${({ theme }) => theme.palette.triadic};
    background: ${({ theme }) => theme.palette.accent};
  }

  text-decoration: none;
`;
