import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 45px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 20px;
    justify-content: left;
    margin-right: auto;
    margin-left: auto;
    width: 768px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-direction: row;
    width: 1280px;
    padding-right: 16px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 25px;
    width: 705px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 805px;
    padding-left: 0;
  }
`;

export const UserContainer = styled.div``;

export const PetsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
    width: 280px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 704px;
    margin-left: auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 821px;
    margin-left: 32px;
  }
`;
