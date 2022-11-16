import styled from '@emotion/styled';

export const PopUpContainer = styled.div`
  position: absolute;
  right: 54px;
  top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 200px;
  max-width: 200px;

  background-color: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(2px);

  border: none;
  border-radius: 40px;
  border-top-right-radius: 0;

  box-shadow: 0 0 20px ${({ theme }) => theme.palette.hoverAccent};

  z-index: 20;
`;

export const Message = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  text-align: center;

  color: ${({ theme }) => theme.palette.accent};
`;

export const CloseButton = styled.button`
  padding: 4px;
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-bottom: 20px;

  color: ${({ theme }) => theme.palette.triadic};
  background: transparent;
  border: none;

  transition: ${({ theme }) => theme.animations.transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
    transform: ${({ theme }) => theme.animations.transform};
  }
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;

  fill: currentColor;
`;
