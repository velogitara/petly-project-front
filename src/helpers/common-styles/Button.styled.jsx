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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 44px;
    font-size: 20px;
    letter-spacing: 0.4em;

    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 448px;
      height: 48px;
    }
    @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
      width: 458px;
    }
    &.on {
      background-color: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.triadic};

      &:hover {
        background: ${({ theme }) => theme.palette.hoverAccent};
      }
    }

    &.back {
      background-color: ${({ theme }) => theme.palette.triadic};
      border: 2px solid ${({ theme }) => theme.palette.accent};
      &:hover {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
  }

  /* ================formAddPet==================== */

  &.formAddPet {
    padding: 8.5px auto;
    width: 240px;
    font-size: 16px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 180px;
      font-size: 20px;
    }
    &.on {
      background-color: ${({ theme }) => theme.palette.accent};
      color: ${({ theme }) => theme.palette.triadic};

      &:hover {
        background: ${({ theme }) => theme.palette.hoverAccent};
      }
    }

    &.back {
      background-color: ${({ theme }) => theme.palette.triadic};
      border: 2px solid ${({ theme }) => theme.palette.accent};
      &:hover {
        color: ${({ theme }) => theme.palette.accent};
      }
    }
  }

  /* ================active==================== */

  &.active {
    background: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.triadic};
  }
`;
