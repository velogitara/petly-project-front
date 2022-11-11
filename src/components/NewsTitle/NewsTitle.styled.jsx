import styled from '@emotion/styled';
import { theme } from '../../helpers';

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 28px;

  @media screen and (min-width: ${theme.screens.tablet}) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`

export default Title;
