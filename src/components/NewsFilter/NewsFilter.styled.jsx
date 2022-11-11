import styled from '@emotion/styled';
import { theme } from '../../helpers';

const Icon = styled.svg`
  display: block;
  fill: black;

  width: 20px;
  height: 20px;
  //background-color: aqua;
`


const Filter = styled.input`
  box-shadow: ${theme.shadows.card};
  border-radius: 20px;
  border-color: transparent;
  margin-bottom: 40px;
  width: 280px;
  height: 40px;
  padding: 10px;

  ::before{
    content: "";
    background-image: url("../../assets/icons/icons.svg#icon-search");
    display: block;
    fill: black;
  }

  @media screen and (min-width: ${theme.screens.tablet}) {
    width: 608px;
    height: 44px;
    margin-bottom: 60px;
  }

  // @media screen and (min-width: ${theme.screens.desktop}) {
  //
  // }


`

export{
  Filter, Icon
}
