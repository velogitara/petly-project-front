import styled from '@emotion/styled';

export const FavButtonContainer = styled.div`
  position: relative;
  ${({ modal }) =>
    modal ? 'display: flex; justify-content: center; align-items: center; width: 100%;' : ''}

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    ${({ modal }) => (modal ? 'margin-right: 12px; width: 160px; ' : '')}
  }
`;

export const FavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ modal }) => (modal ? '9px' : '0')};
  width: ${({ modal }) => (modal ? '100%;' : '44px;')};
  height: ${({ modal }) => (modal ? '40px;' : '44px')};
  margin-bottom: ${({ modal }) => (modal ? '0; ' : '12px')};

  color: ${({ favorite, theme }) =>
    favorite ? theme.palette.accent : theme.backgrounds.whiteTranslucent};
  background-color: ${({ theme, modal }) =>
    modal ? theme.backgrounds.secondary : theme.backgrounds.whiteTranslucent};
  backdrop-filter: ${({ modal }) => (modal ? 'none;' : 'blur(2px);')};
  border: ${({ modal, theme }) => (modal ? `2px solid ${theme.palette.accent};` : 'none;')};
  border-radius: ${({ modal }) => (modal ? '40px;' : '50%;')};
  cursor: pointer;
  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
    ${({ modal, theme }) => (modal ? `border-color: ${theme.palette.hoverAccent};` : '')}
    transform: ${({ theme }) => theme.animations.transform};
    & svg {
      stroke: ${({ theme }) => theme.palette.hoverAccent};
    }
  }
`;

export const FavLabel = styled.span`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;
  color: ${({ theme }) => theme.palette.primary};
`;

export const FavIcon = styled.svg`
  width: ${({ modal }) => (modal ? '16px;' : '24px;')};
  height: ${({ modal }) => (modal ? '16px;' : '22px;')};

  fill: currentColor;
  stroke: ${({ theme }) => theme.palette.accent};
`;
