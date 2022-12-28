import styled from '@emotion/styled';
import { constants } from 'constants/constants';

const {
  noImage: { tablet },
} = constants;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);

  z-index: 151;
`;
export const Modal = styled.div`
  position: relative;
  max-width: 280px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 550px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    max-width: 650px;
  }
`;

export const ItemImage = styled.img`
  max-width: 100%;
  height: 100%;

  object-fit: cover;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  background-image: url(${tablet});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
