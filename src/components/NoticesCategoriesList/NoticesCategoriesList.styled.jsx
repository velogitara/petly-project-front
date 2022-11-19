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
