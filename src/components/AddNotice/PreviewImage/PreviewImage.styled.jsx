import styled from '@emotion/styled';

export const Image = styled.img`
  width: 116px;
  height: 116px;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 140px;
    height: 140px;
  }
`;

export const Container = styled.div`
  width: 116px;
  height: 116px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 140px;
    height: 140px;
  }
`;
