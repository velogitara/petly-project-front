import styled from '@emotion/styled';

export const ConfirmButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  padding: 8px;

  font-size: inherit;
  font-weight: 500;

  color: ${({ theme }) => theme.palette.accent};
  border: 2px solid ${({ theme }) => theme.palette.accent};
  border-radius: 20px;
  background: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.hoverAccent};
    color: ${({ theme }) => theme.palette.triadic};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;
