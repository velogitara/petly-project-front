import styled from '@emotion/styled';

export const Btn = styled.button`
  /* ================base==================== */

  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: ${({ theme }) => theme.animations.transition};

  /* ================active==================== */

  &.accaunt {
    background: ${({ theme }) => theme.palette.triadic};
    color: ${({ theme }) => theme.palette.primary};
    border: 2px solid ${({ theme }) => theme.palette.accent};
    padding: 8px 28px;
    font-size: 12px;
    letter-spacing: 0.04em;
    &:hover {
      background: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.triadic};
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 10px 28px;
      font-size: 16px;
    }
  }

  /* ================headerAuth-filter==================== */

  &.headerAuth-filter {
    background: ${({ theme }) => theme.palette.triadic};
    color: ${({ theme }) => theme.palette.primary};
    border: 2px solid ${({ theme }) => theme.palette.accent};
    padding: 8px 28px;
    font-size: 14px;
    letter-spacing: 0.04em;
    &:hover {
      background: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.triadic};
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 10px 28px;
      font-size: 20px;
    }
  }

  /* ================learnMore==================== */

  &.learnMore {
    background: ${({ theme }) => theme.palette.triadic};
    color: ${({ theme }) => theme.palette.accent};
    border: 2px solid ${({ theme }) => theme.palette.accent};
    padding: 8px auto;
    width: 248px;
    font-size: 16px;
    &:hover {
      border-color: ${({ theme }) => theme.palette.hoverAccent};
      color: ${({ theme }) => theme.palette.hoverAccent};
    }
  }

  /* ================add==================== */

  &.add {
    width: 88px;
    height: 88px;
    position: relative;
    background: ${({ theme }) => theme.palette.accent};
    box-shadow: ${({ theme }) => theme.shadows.card};
    &::after {
      content: 'Add pet';
      position: absolute;
      font-size: 12px;
      top: 48px;
      color: ${({ theme }) => theme.palette.triadic};
    }
    &:hover {
      transform: ${({ theme }) => theme.animations.transform};
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 44px;
      height: 44px;
      &::after {
        display: none;
      }
    }
  }

  /* ================formAuth==================== */

  &.formAuth {
    padding: 8.5px auto;
    width: 280px;
    font-size: 20px;
    background-color: ${({ theme }) => theme.palette.triadic};
    border: 2px solid ${({ theme }) => theme.palette.accent};
    letter-spacing: 0.4em;
    &:hover {
      background: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.triadic};
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 448px;
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      width: 458px;
    }
  }

  /* ================formAddPet==================== */

  &.formAddPet {
    background-color: ${({ theme }) => theme.palette.triadic};
    border: 2px solid ${({ theme }) => theme.palette.accent};
    padding: 8.5px auto;
    width: 240px;
    font-size: 16px;
    &:hover {
      background: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.triadic};
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 180px;
      font-size: 20px;
    }
  }

  /* ================active==================== */

  &.active {
    background: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.triadic};
  }
`;
