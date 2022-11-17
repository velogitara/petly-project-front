import styled from '@emotion/styled';
import { theme } from 'helpers';

const { fonts, screens } = theme;

const Title = styled.h2`
  font-family: ${fonts.primary},
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 1.38;
   @media (min-width: ${screens.tablet}) {
    font-size: 48px;
    margin-bottom: 45px;
   } ;
   
    @media (min-width: ${screens.desktop}) {
      margin-bottom: 60px;
   }`;

const StyledComponents = { Title };

export default StyledComponents;
