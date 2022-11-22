import styled from '@emotion/styled';
import { theme } from 'helpers';

const { screens } = theme;

const OurFriendSectionStyled = styled.section`
  padding-top: 47px;
  padding-bottom: 100px;

  @media (min-width: ${screens.tablet}) {
    padding-top: 92px;
  }

  @media (min-width: ${screens.desktop}) {
    padding-top: 61px;
  }
`;

const styledComponents = { OurFriendSectionStyled };

export default styledComponents;
