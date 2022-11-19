import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200%;
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    display: block;
    width: 100%;
    position: relative;
  }
`;
