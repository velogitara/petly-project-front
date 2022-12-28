import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;

  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);

  z-index: 25;
`;
export const Modal = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%);
  width: 280px;
  height: fit-content;
  padding: 40px 20px 40px 20px;
  margin-bottom: 50px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 40px 80px;
    border-radius: 40px;
    width: 608px;
  }
`;
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  // font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;

  text-align: center;
  color: #000000;
  margin: 0 0 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-weight: 600;
    font-size: 36px;

    &.title {
      margin-bottom: 40px;
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  // border-radius: 40px;
  border-radius: 50%;
  backdrop-filter: blur(2px);
  border: none;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const SvgClose = styled.svg`
  width: 20px;
  height: 20px;
`;
