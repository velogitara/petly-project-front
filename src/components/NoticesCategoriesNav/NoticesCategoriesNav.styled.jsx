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

export const AddButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: -188px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  z-index: 10;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position: static;
    z-index: 1;
  }
`;

export const AddButtonLabel = styled.p`
  display: none;
  margin-right: 12px;

  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  text-transform: capitalize;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: inline-block;
  }
`;

export const AddButtonSpan = styled.span`
  display: inline-block;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.35;
  text-transform: capitalize;

  color: ${({ theme }) => theme.palette.triadic};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: none;
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  min-height: 80px;
  padding: 0;

  color: ${({ theme }) => theme.palette.triadic};

  background-color: ${({ theme }) => theme.palette.accent};
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.card};

  transition: ${({ theme }) => theme.animations.transition};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-width: 44px;
    min-height: 44px;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const AddButtonIcon = styled.svg`
  width: 22px;
  height: 22px;
  fill: currentColor;
  stroke: currentColor;
  margin-bottom: 6px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 16px;
    height: 16px;
    margin-bottom: 0;
  }
`;
