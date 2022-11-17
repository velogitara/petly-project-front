import styled from '@emotion/styled';
import heartDecktop from '../../assets/backgrounds/Union.svg';
import bgMobile from '../../assets/backgrounds/background02.svg';
import bgTablet from '../../assets/backgrounds/background01.svg';
import bgDesktop from '../../assets/backgrounds/Frame.svg';

export const Home = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  background-image: url(${bgMobile});
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    background-image: url(${bgTablet});
    background-size: cover;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    background-image: url(${bgDesktop});
    background-size: contain;
  }
`;

export const Content = styled.div`
  position: relative;
  margin-top: 118px;
  height: 100%;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 68px;
    margin-top: 160px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.3;
  color: ${({ theme }) => theme.palette.primary};
  animation-duration: 3s;
  animation-name: opacityAnimation;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 68px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 588px;
    animation-name: slideinTitle;
  }
`;

export const ImageBlock = styled.picture`
  position: absolute;
  bottom: 0;
  animation-duration: 4s;
  animation-name: opacityAnimation;

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    right: 0;
    animation-duration: 3s;
    animation-name: slideinImg;
    &::before {
      content: '';
      display: block;
      position: absolute;
      background-image: url(${heartDecktop});
      width: 91.93px;
      height: 89px;
      top: 57px;
      left: 56px;
    }
  }

  @keyframes opacityAnimation {
    from {
      opacity: 0%;
    }

    to {
      opacity: 100%;
    }
  }

  @keyframes slideinImg {
    from {
      margin-right: -100%;
    }

    to {
      margin-right: 0;
    }
  }

  @keyframes slideinTitle {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: 0;
    }
  }
`;
