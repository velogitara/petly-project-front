import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthNavBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    gap: 20px;
  }
`;

export const AuthLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.6;
  padding: 0 28px;
  border-radius: 40px;
  height: 35px;
  color: inherit;
  background: ${({ theme }) => theme.palette.triadic};
  border: 2px solid ${({ theme }) => theme.palette.accent};
  transition: ${({ theme }) => theme.animations.transition};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent};
    transition: ${({ theme }) => theme.animations.transition};
  }
  &.active {
    color: ${({ theme }) => theme.palette.triadic};
    background: ${({ theme }) => theme.palette.accent};
  }
  &.active:hover,
  &.active:focus {
    background: ${({ theme }) => theme.palette.hoverAccent};
    transition: ${({ theme }) => theme.animations.transition};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: flex;
    font-size: 20px;
    line-height: 1.35;
    height: 44px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: inherit;
    line-height: inherit;
    height: 47px;
  }
`;
