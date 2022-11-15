import styled from '@emotion/styled';

export const ButtonClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  // border-radius: 40px;
  border-radius: 50%;
  backdrop-filter: blur(2px);
  border: none;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const SvgClose = styled.svg`
  width: 20px;
  height: 20px;
`;
