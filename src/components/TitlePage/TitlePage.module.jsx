import styled from '@emotion/styled';

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary};
  margin: 54px auto 28px auto;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 48px;
    margin: 94px auto 40px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin: 70px auto 40px auto;
  }
`;
