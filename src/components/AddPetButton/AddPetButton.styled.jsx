import styled from '@emotion/styled';

export const AddButtonContainer = styled.div`
  ${({ user }) => (user === true ? 'relative' : 'position: absolute; right: 0; bottom: -220px;')};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  align-self: flex-start;

  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position: relative;
    top: 0;
    z-index: 1;
  }
`;

export const AddButtonLabel = styled.p`
  display: ${({ user }) => (user === true ? 'inline-block' : 'none')};
  margin-right: ${({ user }) => (user === true ? '15px' : '12px')};

  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  white-space: nowrap;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: inline-block;
  }
`;

export const AddButtonSpan = styled.span`
  display: inline-block;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.35;

  color: ${({ theme }) => theme.palette.triadic};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    display: none;
  }
`;

export const AddButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: ${({ user }) => (user === true ? '40px' : '80px')};
  min-height: ${({ user }) => (user === true ? '40px' : '80px')};
  padding: 0;

  color: ${({ theme }) => theme.palette.triadic};

  background-color: ${({ theme }) => theme.palette.accent};
  border: none;
  border-radius: 50%;
  box-shadow: ${({ user, theme }) => (user === true ? 'none' : theme.shadows.card)};

  transition: ${({ theme }) => theme.animations.transition};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    min-width: ${({ user }) => (user === true ? '40px' : '44px')};
    min-height: ${({ user }) => (user === true ? '40px' : '44px')};
    box-shadow: none;
  }

  &:hover,
  &:focus {
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const AddButtonIcon = styled.svg`
  width: ${({ user }) => (user === true ? '16px' : '22px')};
  height: ${({ user }) => (user === true ? '16px' : '22px')};
  fill: currentColor;
  stroke: currentColor;
  margin-bottom: ${({ user }) => (user === true ? '0' : '6px')};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 16px;
    height: 16px;
    margin-bottom: 0;
  }
`;
