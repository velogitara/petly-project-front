import styled from '@emotion/styled';

export const HeaderBox = styled.div`
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
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 10;
  /* @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    display: none;
  } */
`;
