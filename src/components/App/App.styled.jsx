import styled from '@emotion/styled';

export const Application = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;
