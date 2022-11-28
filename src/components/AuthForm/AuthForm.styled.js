import styled from '@emotion/styled';

import { Field, Form} from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const InputForm = styled(Field)`
    display: block;
    background: ${({ theme }) => theme.backgrounds.primary};
    border: 1px solid ${({ theme }) => theme.palette.accent};
    border-radius: 40px;
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.4;
    outline: none;

    padding: 11px 14px;
    width: 280px;
    font-size: 14px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.backgrounds.primary} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.palette.primary};
  }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
        padding: 14px 32px;
        width: 448px;
        font-size: 18px;
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
        width: 458px;
    }
`;
