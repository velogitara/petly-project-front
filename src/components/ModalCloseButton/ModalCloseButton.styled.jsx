import styled from '@emotion/styled';

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  backdrop-filter: blur(2px);
  border: none;
  cursor: pointer;
  z-index: 151;

  color: ${({ theme }) => theme.palette.primary};

  background-color: ${({ theme }) => theme.backgrounds.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.accent};
    transition: ${({ theme }) => theme.animations.transition};
    transform: ${({ theme }) => theme.animations.transform};
  }

  &.big {
    width: 34px;
    height: 34px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 44px;
      height: 44px;
    }
  }

  &.small {
    width: 30px;
    height: 30px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      top: 12px;
      width: 40px;
      height: 40px;
    }
  }
`;

export const SvgClose = styled.svg`
  width: 15px;
  height: 15px;
  fill: currentColor;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
