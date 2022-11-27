import styled from '@emotion/styled';
import heartDecktop from '../../assets/backgrounds/Union.svg';

export const Image = styled.picture`
  animation-duration: 4s;
  animation-name: opacityAnimation;

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    position: relative;
    margin-top: auto;
    animation-duration: 3s;
    animation-name: slideinImg;
    &img {
      max-width: 100%;
      max-height: 100%;
    }

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
  }
`;
