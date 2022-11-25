import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  filter: blur(20);

  z-index: 25;
`;
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 40px 20px 40px 20px;

  border-radius: 40px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 40px 80px;
    width: 608px;
  }
`;
