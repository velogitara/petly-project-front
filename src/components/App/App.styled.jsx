import styled from '@emotion/styled';

export const Application = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${({ theme }) => theme.palette.primary};
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;
