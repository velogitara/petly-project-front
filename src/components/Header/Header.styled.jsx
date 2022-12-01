import styled from '@emotion/styled';

export const HeaderBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
  width: 100%;
  gap: 20px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 98px;
  }
`;

export const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;

  color: ${({ theme }) => theme.palette.primary};

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.accent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const MenuIcon = styled.svg`
  width: 30px;
  height: 20px;
  object-fit: contain;
  fill: currentColor;
`;
