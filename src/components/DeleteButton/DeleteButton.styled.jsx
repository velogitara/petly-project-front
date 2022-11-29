import styled from '@emotion/styled';

export const DelButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;

  &.user {
    @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
      width: 20px;
      height: 20px;
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const DelButton = styled.button`
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;

  color: rgba(17, 17, 17, 0.6);

  background-color: ${({ translucent, theme }) =>
    translucent === true ? theme.backgrounds.whiteTranslucent : theme.backgrounds.primary};
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const DelIcon = styled.svg`
  width: 19.5;
  height: 21px;

  fill: currentColor;
`;
