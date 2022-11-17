import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position: static;
    overflow: hidden;
    margin-bottom: 60px;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -12px;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 28px;
  margin-bottom: 12px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.357;
  color: ${({ theme }) => theme.palette.primary};

  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 40px;

  transition: ${({ theme }) => theme.animations.transition};

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.triadic};
    background-color: ${({ theme }) => theme.palette.accent};
  }

  &:hover,
  &:focus {
    transform: ${({ theme }) => theme.animations.transform};
  }
`;
