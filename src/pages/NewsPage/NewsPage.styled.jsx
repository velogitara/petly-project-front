import styled from '@emotion/styled';
import { theme } from '../../helpers';
import { Container } from '../../helpers';

export const ContainerWithPadding = styled(Container)`
    padding-bottom: 100px;

    @media screen and (min-width: ${theme.screens.desktop}) {
        padding-bottom: 200px;
    }
`

