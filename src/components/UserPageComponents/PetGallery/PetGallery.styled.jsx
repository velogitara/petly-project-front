import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NoPets = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
    width: 240px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 30px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 36px;
  }
`;
