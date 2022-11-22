import styled from '@emotion/styled';
import paw from '../../assets/icons/paw.svg';

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 40px;
  padding: 6px;

  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 40px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: 60px;
    padding: 12px;
  }
`;

export const PaginatorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 22px;
  height: 22px;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.375;

  color: ${({ theme, current }) => (current ? theme.palette.triadic : theme.palette.accent)};
  background-color: ${({ theme, current }) =>
    current ? theme.palette.accent : theme.palette.triadic};

  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 50%;

  &:not(:last-of-type) {
    margin-right: 6px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 44px;
    height: 44px;

    font-size: 16px;

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
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

  transform: ${({ next }) => (next ? 'rotateZ(-90deg)' : 'rotateZ(90deg)')};
`;
