import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 150;
`;
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: fit-content;
  padding: 60px 20px 40px 20px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 704px;
    border-radius: 40px;
  }
`;
// export const ButtonClose = styled.button`
//   position: absolute;
//   top: 12px;
//   right: 20px;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   border: none;
//   background-color: ${({ theme }) => theme.backgrounds.primary};
// `;

export const DeleteBtnContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  z-index: 1;
`;

export const ModalInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
  }
`;
export const ModalInfoImg = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin-bottom: 16px;

  border: none;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 288px;
    height: 328px;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;
export const PicturePet = styled.picture`
  width: 100%;
  height: 240px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 100%;
    height: 328px;
  }
`;

export const ImgPet = styled.img`
  max-width: 100%;
  height: 240px;

  object-fit: cover;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 328px;
  }
`;

export const ImgLabel = styled.p`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  position: absolute;
  background: ${({ theme }) => theme.backgrounds.whiteTranslucent};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-size: 12px;
  line-height: 1.334;
  top: 20px;
  width: 158px;
  height: 28px;
`;
export const InfoPet = styled.div`
  margin-top: 28px;
`;
export const InfoPetTitle = styled.h2`
  margin-bottom: 16px;

  font-size: 24px;
  line-height: 1.375;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.primary};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 28px;
    line-height: 1.357;
    margin-bottom: 20px;
  }
`;
export const InfoPetList = styled.ul``;
export const InfoPetItem = styled.li`
  display: flex;
  justify-content: flex-start;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const InfoPetText = styled.p`
  font-size: 14px;
  line-height: 1.357;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary};

  &:first-of-type {
    width: 118px;
    font-weight: 600;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 14px;
    line-height: 1.375;
  }
`;
export const Comments = styled.p`
  margin-top: 28px;
  margin-bottom: 40px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.366;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 1.5;
  }
`;
export const CommentsSpan = styled.span`
  font-weight: 600;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  font-size: 16px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const Contact = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 40px;
  color: ${({ theme }) => theme.palette.triadic};
  background-color: ${({ theme }) => theme.palette.accent};
  margin-right: 20px;
  margin-left: 12px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 160px;
  }
`;
