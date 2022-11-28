import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200%;
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    max-width: 100%;
    flex-direction: row;
  }
`;
