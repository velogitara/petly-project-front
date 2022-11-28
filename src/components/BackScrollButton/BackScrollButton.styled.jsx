import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  opacity: 0.6;

  z-index: 10;

  color: ${({ theme }) => theme.palette.accent};
  background-color: transparent;
  cursor: pointer;

  transition: ${({ theme }) => theme.animations.transition};

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    bottom: 50px;
    right: 50px;
  }

  &:hover,
  &:focus {
    transform: ${({ theme }) => theme.animations.transition};
    opacity: 1;
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  &.hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;
  fill: currentColor;
`;
