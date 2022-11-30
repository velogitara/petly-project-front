import styled from '@emotion/styled';

export const ThemeBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  font-size: 14px;
  line-height: 1.6;
  padding: 0;
  border-radius: 40px;
  min-width: 39px;
  height: 39px;
  color: ${({ theme }) => theme.palette.triadic};
  background: ${({ theme }) => theme.palette.accent};
  border: none;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-width: 44px;
    height: 44px;
  }

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const ThemeIcon = styled.svg`
  width: 22px;
  height: 22px;
  object-fit: contain;
  fill: currentColor;
`;
