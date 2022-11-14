import styled from '@emotion/styled';

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0 20px;
  width: 100%;
`;

export const ItemInfoTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.357;
  letter-spacing: -0.01em;
`;

export const ItemInfoText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;
`;
