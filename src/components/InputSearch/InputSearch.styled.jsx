import styled from '@emotion/styled';

export const InputContainer = styled.form`
  position: relative;
`;

export const InputStyled = styled.input`
  border-radius: 20px;
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  width: 280px;
  padding: 9px 40px 9px 12px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    border-radius: 40px;
    width: 608px;
    font-size: 20px;
    padding: 8px 20px;
  }
`;

export const BtnSearch = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.palette.triadic};
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.animations.transition};
  &:hover svg {
    fill: ${({ theme }) => theme.palette.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    top: 12px;
  }
`;

export const ClearButton = styled.button`

position: absolute;
  top: 10px;
  right: 40px;

  padding: 4px;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-bottom: 12px;
  z-index: 20;

  color: ${({ theme }) => theme.palette.primary};
  background: transparent;
  border: none;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const ClearIcon = styled.svg`
  width: 100%;
  height: 100%;

  fill: currentColor;
`;
