import styled from '@emotion/styled';
import paw from '../../assets/icons/paw.svg';

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  /* padding: 6px; */

  /* border: 2px solid ${({ theme }) => theme.palette.accent}; */
  /* border-radius: 40px; */

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: 60px;
    /* padding: 12px; */
  }
`;

export const PaginatorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: ${({ secondary }) => (secondary ? '20px' : '22px')};
  height: ${({ secondary }) => (secondary ? '20px' : '22px')};

  font-size: 12px;
  font-weight: 500;
  line-height: 1.375;

  color: ${({ theme, current }) => (current ? theme.palette.triadic : theme.palette.accent)};
  background-color: ${({ theme, current }) =>
    current ? theme.palette.accent : theme.backgrounds.secondary};

  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 50%;

  &:not(:last-of-type) {
    margin-right: 4px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: ${({ secondary }) => (secondary ? '36px' : '44px')};
    height: ${({ secondary }) => (secondary ? '36px' : '44px')};

    font-size: 16px;

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.hoverAccent};
    border-color: ${({ theme }) => theme.palette.hoverAccent};
    color: ${({ theme }) => theme.palette.triadic};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const Ellipsis = styled.span`
  display: flex;
  align-self: flex-start;

  font-size: 14px;
  line-height: 0.7;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 20px;
    line-height: 1.1;
  }
`;

export const ArrowIcon = styled.span`
  min-width: 12px;
  min-height: 12px;

  background-image: url(${paw});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-width: 16px;
    min-height: 16px;

    font-size: 16px;
  }

  transform: ${({ next }) => (next ? 'rotateZ(90deg)' : 'rotateZ(-90deg)')};

  button:hover & {
    filter: grayscale(100%) brightness(200%);
  }
`;
