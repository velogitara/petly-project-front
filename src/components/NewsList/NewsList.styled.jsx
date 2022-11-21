import styled from '@emotion/styled';
import { theme } from '../../helpers';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 280px);
  gap: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: ${theme.screens.tablet}) {
    grid-template-columns: repeat(2, 335px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: ${theme.screens.desktop}) {
    grid-template-columns: repeat(3, 391px);
  }
`

export default List;
