import styled from '@emotion/styled';

export const PaginatorContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 40px;
  }
`;
