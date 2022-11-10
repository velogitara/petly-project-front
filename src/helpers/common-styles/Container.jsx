import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 704px;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    width: 1248px;
  }
`;
