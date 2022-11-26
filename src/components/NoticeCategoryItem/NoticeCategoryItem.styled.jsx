import styled from '@emotion/styled';
import { constants } from 'constants/constants';

const {
  noImage: { tablet },
} = constants;

console.log(tablet);

export const ItemContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 32px;

  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border: none;
  border-radius: 0px 0px 20px 20px;

  box-shadow: ${({ theme }) => theme.shadows.card};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 288px;
  }
`;

export const ItemPicture = styled.picture`
  width: 280px;
  height: 288px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 288px;
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

export const CategoryLabel = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  top: 20px;
  left: 0;
  width: 158px;
  height: 28px;
  padding-left: 20px;

  z-index: 1;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.334;

  background-color: ${({ theme }) => theme.backgrounds.whiteTranslucent};
  backdrop-filter: blur(2px);
  border: none;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 50px 20px;
  width: 100%;
`;

export const InfoDescription = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoDescriptionItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const InfoTitle = styled.h3`
  margin-bottom: 20px;

  font-size: 28px;
  font-weight: 700;
  line-height: 1.357;
  letter-spacing: -0.01em;

  color: ${({ theme }) => theme.palette.primary};
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;

  color: ${({ theme }) => theme.palette.primary};

  &:first-of-type {
    min-width: 90px;

    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      min-width: 87px;
    }
  }
`;

export const UserButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
`;
