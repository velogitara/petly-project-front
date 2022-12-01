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

  /* background-color: ${({ theme }) => theme.palette.triadic}; */
  background-color: transparent;
  color: ${({ theme }) => theme.palette.accent};

  border: 2px solid currentColor;
  border-radius: 40px;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;
