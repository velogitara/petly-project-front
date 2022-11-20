import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 14px;
  margin-bottom: 40px;
  border-radius: 20px;
  color: inherit;
  background: ${({ theme }) => theme.palette.triadic};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position: relative;
    margin-bottom: 20px;
    padding: 24px 40px 24px 0;
    min-width: calc((100vw - 704px) / 2 + 704px);
    border-radius: 0px 40px 40px 0px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-bottom: 0;
    padding: 20px 16px 103px 0;
    min-width: calc(100vw - (100vw - 1247px) / 2 - 853px);
  }
`;

export const UserProfileForm = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.screens.toDesktop}) {
    margin-left: auto;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
    flex-direction: column;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-direction: column;
    margin-left: auto;
  }
`;

export const UserProfileInfo = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.screens.toDesktop}) {
    margin-right: 52px;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
    margin-right: 0;
  }
`;

export const UserLogout = styled(Link)`
  text-decoration: none;
  display: flex;
`;
