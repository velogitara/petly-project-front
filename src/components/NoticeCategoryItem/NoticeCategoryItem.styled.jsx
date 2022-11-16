import styled from '@emotion/styled';

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
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 288px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  object-fit: cover;
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
  padding: 20px 20px 0 20px;
  width: 100%;
  margin-bottom: 50px;
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
  font-size: 28px;
  font-weight: 700;
  line-height: 1.357;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;
`;

export const UserButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
