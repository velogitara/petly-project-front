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
    border-radius: 0px 40px 40px 0px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-bottom: 0;
    padding: 20px 16px 40px 16px;
  }
`;

export const UserProfileForm = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.screens.toDesktop}) {
    margin-left: auto;
    align-items: flex-start;
    flex-direction: row-reverse;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-direction: column;
    margin-left: auto;
    align-items: center;
  }
`;

export const UserProfileInfo = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.screens.toDesktop}) {
    padding-top: 16px;
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
