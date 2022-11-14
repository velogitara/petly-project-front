import styled from '@emotion/styled';
import bg from '../../assets/backgrounds/auth-desk.svg';
import bgTab from '../../assets/backgrounds/auth-tab.svg';
import bgMob from '../../assets/backgrounds/auth-mob.svg';

export const AuthSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 98px);
  width: 100vw;

  background-image: url(${bgMob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    background-image: url(${bgTab});
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    background-image: url(${bg});
  }
`;
