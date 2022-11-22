import styled from '@emotion/styled';

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  backdrop-filter: blur(2px);
  border: none;
  cursor: pointer;
  z-index: 151;

  background-color: ${({ theme }) => theme.backgrounds.primary};
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 44px;
    height: 44px;
  }
`;

export const SvgClose = styled.svg`
  width: 15px;
  height: 15px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
