import styled from '@emotion/styled';
import { theme } from '../../helpers';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 280px);
  gap: 40px;

  @media screen and (min-width: ${theme.screens.tablet}) {
    grid-template-columns: repeat(2, 335px);
    grid-column-gap: 60px;
    grid-row-gap: 30px;
  }

  @media screen and (min-width: ${theme.screens.desktop}) {
    grid-template-columns: repeat(3, 391px);
    grid-column-gap: 60px;
    grid-row-gap: 30px;
  }
`

export default List;
