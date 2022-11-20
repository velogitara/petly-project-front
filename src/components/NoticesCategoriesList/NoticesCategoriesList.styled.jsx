import styled from '@emotion/styled';

export const CategoriesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Message = styled.p`
  min-height: 50vh;

  font-size: 20px;
  font-weight: 700;

  color: ${({ theme }) => theme.palette.translucent};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 30px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    font-size: 40px;
  }
`;
