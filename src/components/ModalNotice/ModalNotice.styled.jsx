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
  transform: scale(1) translate(-50%, -50%);
  width: 280px;
  height: fit-content;
  padding-left: 20px;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border-radius: 40px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 704px;
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
export const ModalInfo = styled.div`
  display: flex;
  padding-bottom: 28px;
  padding-right: 55px;
`;
export const ModalInfoImg = styled.div`
  position: relative;
`;
export const ImgPet = styled.picture`
  width: 240px;
  height: 240px;
  background-color: red;
  object-fit: cover;

  border: none;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 288px;
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
  background: rgba(255, 255, 255, 0.6);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-size: 12px;
  top: 20px;
  width: 158px;
  height: 28px;
`;
export const InfoPet = styled.div`
  margin-left: 20px;
`;
export const InfoPetTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;
export const InfoPetList = styled.ul`
  margin: 0;
  padding: 0;
`;
export const InfoPetItem = styled.li`
  position: relative;
  margin-bottom: 8px;
  font-weight: 600;
`;
export const InfoPetSpan = styled.span`
  position: absolute;
  left: 150px;
  font-weight: 500;
`;
export const Comments = styled.p`
  padding-right: 24px;
  padding-bottom: 32px;
  line-height: 1.5;
`;
export const CommentsSpan = styled.span`
  font-weight: 600;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fonts.primar};
  font-size: 16px;
`;
export const AddToFaforite = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 40px;
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
