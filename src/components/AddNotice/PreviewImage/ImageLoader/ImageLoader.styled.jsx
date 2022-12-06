import styled from '@emotion/styled';

export const Loader = styled.div`
  position: absolute;
  font-size: 50px;
  width: 116px;
  height: 116px;
  color: #f59356ce;
  background-color: rgba(36, 15, 7, 0.34);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 140px;
    height: 140px;
  }
`;

export const Paw = styled.div`
  width: 120px;
  height: 120px;
  opacity: 0;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: currentColor;
`;
