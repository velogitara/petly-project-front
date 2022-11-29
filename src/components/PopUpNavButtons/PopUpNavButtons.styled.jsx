import styled from '@emotion/styled';

export const NavButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavButton = styled.button`
  padding: 8px 28px;

  font-size: inherit;
  font-weight: 700;
  text-transform: capitalize;

  color: ${({ theme }) => theme.palette.primary};
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.accent};

  &:not(:last-child) {
    margin-right: 10px;
  }

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.hoverAccent};
    color: ${({ theme }) => theme.palette.triadic};
    box-shadow: 0 0 10px ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;
