import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const UserLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

	height: 44px;
	padding: 0 28px;
  color: ${({ theme }) => theme.palette.triadic};
  background: ${({ theme }) => theme.palette.accent};
  border-radius: 40px;

	&:hover,
  &:focus {
		opacity: 0.9;
		transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}
`;

export const IconSvg = styled.svg`
  /* width: 28px;
  height: 28px; */
	margin-right: 12px;
  fill: ${({ theme }) => theme.palette.triadic};
`;
