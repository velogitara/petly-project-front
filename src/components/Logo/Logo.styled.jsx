import styled from '@emotion/styled';

export const LogoText = styled.p`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.palette.primary};
  margin-right: 80px;
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.palette.accent};
`;
