import styled from '@emotion/styled';

export const LearnButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-top: auto;
  width: 248px;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.366;
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
