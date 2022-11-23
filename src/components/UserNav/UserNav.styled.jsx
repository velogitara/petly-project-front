import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const UserLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.6;
  height: 35px;
  padding: 0 28px;
  gap: 12px;
  color: ${({ theme }) => theme.palette.triadic};
  background: ${({ theme }) => theme.palette.accent};
  border-radius: 40px;
  fill: ${({ theme }) => theme.palette.triadic};
  transition: ${({ theme }) => theme.animations.transition};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transition: ${({ theme }) => theme.animations.transition};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: flex;
    font-size: 20px;
    line-height: 1.35;
    height: 44px;
  }
`;

export const IconSvg = styled.svg`
  width: 20px;
  height: 20px;
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 28px;
    height: 28px;
  }
`;
