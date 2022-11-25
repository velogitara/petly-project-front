import styled from '@emotion/styled';
import { theme } from 'helpers';

export const Label = styled.label`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.47;
    margin-bottom: 8px;
    color: ${theme.palette.primary}

    @media screen and (min-width: ${theme.screens.tablet}) {
        font-size: 24px;
        line-height: 1.1;
        margin-bottom: 12px;
    }
`