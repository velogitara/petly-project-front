import styled from '@emotion/styled';

const OurFriendSectionStyled = styled.section`
  padding-top: 47px;
  padding-bottom: 100px;

  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 92px;
  }

  @media (min-width: ${({ theme }) => theme.screens.desktop}) {
    padding-top: 61px;
  }
`;

const styledComponents = { OurFriendSectionStyled };

export default styledComponents;
