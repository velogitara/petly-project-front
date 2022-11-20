import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 45px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 20px;
    margin-right: auto;
    justify-content: left;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-direction: row;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 25px;
    width: 705px;
    margin-left: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 805px;
    margin-left: 0;
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
