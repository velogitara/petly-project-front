import styled from '@emotion/styled';
import bgMobile from '../../assets/backgrounds/background02.svg';
import bgTablet from '../../assets/backgrounds/background01.svg';
import bgDesktop from '../../assets/backgrounds/Frame.svg';

export const Block = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${bgMobile});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100vw;
  height: calc(100vh - 74px);
  @media (orientation: landscape) {
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    background-image: url(${bgTablet});
    background-size: cover;
    height: calc(100vh - 98px);
    @media (orientation: landscape) {
      height: 100%;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    background-image: url(${bgDesktop});
    background-size: contain;
    overflow: hidden;
    height: 100%;
    @media (orientation: landscape) {
      height: calc(100vh - 98px);
    }
  }
`;
