import styled from '@emotion/styled';

export const FavButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 44px;
  height: 44px;
  margin-bottom: 12px;

  color: ${({ favorite, theme }) =>
    favorite === true ? theme.palette.accent : theme.backgrounds.whiteTranslucent};
  background-color: ${({ theme }) => theme.backgrounds.whiteTranslucent};
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
    & svg {
      stroke: ${({ theme }) => theme.palette.hoverAccent};
    }
  }
`;

export const FavIcon = styled.svg`
  width: 24px;
  height: 22px;

  fill: currentColor;
  stroke: ${({ theme }) => theme.palette.accent};
`;
