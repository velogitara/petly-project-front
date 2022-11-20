import styled from '@emotion/styled';

export const LearnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 79px;
  margin-top: auto;

  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-transform: capitalize;

  background-color: ${({ theme }) => theme.palette.triadic};
  color: ${({ theme }) => theme.palette.accent};

  border: 2px solid currentColor;
  border-radius: 40px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
  }
`;
