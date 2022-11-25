import styled from '@emotion/styled';
import { theme } from '../../helpers';

const SearchErrorMessage = styled.p`
  margin-top: 40px;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.palette.accent};

  @media screen and (min-width: ${theme.screens.tablet}) {
    margin-top: 60px;
  }
`

export { SearchErrorMessage };
