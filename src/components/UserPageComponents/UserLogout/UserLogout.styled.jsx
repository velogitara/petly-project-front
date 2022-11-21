// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const LogoutButton = styled.button`
  text-decoration: none;
  display: flex;
  margin-left: auto;
  margin-top: 40px;
  border: none;
  background: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position: absolute;
    bottom: 24px;
    right: 620px;
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    position: absolute;
    bottom: 40px;
    right: 310px;
  }
`;

export const SvgIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 8px;

  fill: ${({ theme }) => theme.palette.accent};
  stroke: ${({ theme }) => theme.palette.accent};
`;

export const LogoutText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.backgrounds.backdrop};
`;
