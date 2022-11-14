import styled from '@emotion/styled';

export const NavigationBox = styled.nav`
  width: 100%;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
    position: absolute;
    top: 0;
    left: -101%;
    width: 100%;
    min-height: 100vh;
    padding: 100px 0px;
    text-align: center;
    overflow: auto;
    background-color: ${({ theme }) => theme.backgrounds.primary};
    transition: ${({ theme }) => theme.animations.transition};
    z-index: 9;
    &.isOpen {
      left: 0;
      transition: ${({ theme }) => theme.animations.transition};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: inline-flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    font-size: 48px;
    line-height: 1.43;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: 20px;
    line-height: 1.35;
  }
`;
