import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 4px;

    @media screen and (min-width: ${theme.screens.tablet}) {
      margin-bottom: 8px;
    }
  }
`;

export const InfoContainer = styled.div`
  ${Container}
`;

export const InfoForm = styled.form`
  ${Container}
`;

export const InfoLabel = styled.label`
  margin-right: 8px;
  width: 56px;

  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 18px;
    width: 83px;
    margin-right: 24px;
  }
`;

export const InfoInput = styled.input`
  width: 159px;
  height: 24px;
  padding: 4px 18px;
  line-height: 1.33;
  margin-right: 9px;

  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  font-weight: 500;
  font-size: 12px;

  &:hover,
  &:focus {
    outline: none;
  }

  &.edit {
    background-color: ${({ theme }) => theme.backgrounds.primary};
  }

  &.non-edit {
    background-color: none;
    border: transparent;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 216px;
    height: 32px;
    padding: 4px 12px;
    margin-right: 24px;
    font-size: 18px;
    line-height: 1.38;
  }
`;

export const InfoButton = styled.button`
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 20px;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 32px;
    height: 32px;
    padding: 8px;
  }
`;

export const SvgCheck = styled.svg`
  fill: ${({ theme }) => theme.palette.accent};
  width: 100%;
  height: 100%;
`;

export const SvgEdit = styled.svg`
  fill: ${({ theme }) => theme.palette.accent};
  width: 100%;
  height: 100%;

  button:disabled & {
    fill: ${({ theme }) => theme.backgrounds.backdrop};
  }
`;
