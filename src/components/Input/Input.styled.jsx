import styled from '@emotion/styled';
import {Field} from 'formik'

export const InputForm = styled(Field)`
  display: block;
  background: ${({ theme }) => theme.backgrounds.primary};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.4;
  outline: none;

  &.inputAuth {
    padding: 11px 14px;
    width: 280px;
    font-size: 14px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 14px 32px;
      width: 448px;
      font-size: 18px;
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      width: 458px;
    }
  }

  &.inputAdd {
    padding: 11px 14px;
    width: 100%;
    font-size: 14px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 11px 16px;
      width: 448px;
      font-size: 16px;
    }
  }
`;
