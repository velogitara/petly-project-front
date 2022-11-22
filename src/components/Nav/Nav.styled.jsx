import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavContainer = styled.div`
@media screen and (min-width: ${({ theme }) => theme.screens.tablet}) and (max-width: ${({theme,}) => theme.screens.toDesktop}) {
    padding: 160px 0;
    position: fixed;
    top: 0;
		left: 0;
    width: 100%;
    min-height: 100vh;
    text-align: center;
    overflow: auto;
    background-color: ${({ theme }) => theme.backgrounds.primary};
    transition: ${({ theme }) => theme.animations.transition};
    z-index: 9;
  }
`;

export const NavBox = styled.nav`
  display: inline-flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 60px;  
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: inline-flex;
    flex-direction: column;
    gap: 60px;
		padding: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-direction: row;
    gap: 80px;
    padding: 0;
  }
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: ${({ theme }) => theme.animations.transition};
  &:hover,
  &:focus {
    text-decoration-line: underline;
    color: ${({ theme }) => theme.palette.accent};
    transition: ${({ theme }) => theme.animations.transition};
  }
  &.active {
    color: ${({ theme }) => theme.palette.accent};
    text-decoration-line: underline;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.toDesktop}) {
    display: inline-flex;
    justify-content: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
  }
`;
