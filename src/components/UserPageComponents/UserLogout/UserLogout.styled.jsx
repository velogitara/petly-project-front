import styled from '@emotion/styled';

export const LogoutButton = styled.button`
  text-decoration: none;
  display: flex;
  margin-left: auto;
  border: none;
  background: none;
  padding: 0;

  transition: ${({ theme }) => theme.animations.transition};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
  }

  &:hover p,
  &:focus p {
    color: ${({ theme }) => theme.palette.accent};
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

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  padding: 0;
  margin-top: 42px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-left: 32px;
    margin-right: auto;
    margin-top: -20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-left: 0;
    margin-top: 41px;
  }
`;
