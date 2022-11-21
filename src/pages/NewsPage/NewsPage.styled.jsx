import styled from '@emotion/styled';
import { theme } from '../../helpers';
import { Container } from '../../helpers';


export const ContainerWithPadding = styled(Container)`
  padding-bottom: 100px;

    @media screen and (min-width: ${theme.screens.desktop}) {
        padding-bottom: 200px;
    }
`

export const Wrapper = styled.div`
  @media screen and (min-width: ${theme.screens.tablet}){
    display: grid;
    grid-column-gap: 60px;
    justify-content: space-between;
    align-content: center;
    grid-auto-flow: column;
  }

`
