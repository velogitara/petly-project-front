import styled from '@emotion/styled';

export const Input = styled.input`
  background: ${({ theme }) => theme.backgrounds.primary};
  border: 1px solid rgba(245, 146, 86, 0.5);
  // ${({ theme }) => theme.palette.accent};
  border-radius: 40px;
  line-height: 1.4;
  outline: none;
  padding: 11px 14px;
  width: 100%;
  font-size: 14px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 11px 16px;
    width: 100%;
    font-size: 16px;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.35;

    color: rgba(27, 27, 27, 0.6);

    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      font-size: 16px;
      line-height: 1.63;
    }
  }
`;
