import styled from '@emotion/styled';

export const ClearButton = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  padding: 4px;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-bottom: 12px;
  color: #111111;
  background: transparent;
  border: none;
  transition: ${({ theme }) => theme.animations.transition};
  &:hover {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const ClearIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
