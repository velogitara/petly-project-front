import styled from '@emotion/styled';

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 36px;
    line-height: 49px;
  }
`;
