import styled from '@emotion/styled';

export const Header = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;

  &.information {
    margin-bottom: 18px;
    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      margin-bottom: 24px;
    }
  }

  &.pets {
    margin-bottom: 24px;
  }

  &.user {
    @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
      width: 280px;
    }

    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      width: 394px;
      margin-left: auto;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 28px;
    line-height: 1.43;
  }
`;
