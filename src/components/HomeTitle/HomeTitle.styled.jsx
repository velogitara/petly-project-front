import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 60px;
  line-height: 1.3;
  color: ${({ theme }) => theme.palette.primary};
  animation-duration: 3s;
  animation-name: opacityAnimation;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 68px;
    margin-top: 92px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 588px;
    animation-name: slideinTitle;
  }
  @keyframes opacityAnimation {
    from {
      opacity: 0%;
    }

    to {
      opacity: 100%;
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
