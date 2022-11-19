import styled from '@emotion/styled';
import { Container } from 'helpers';

export const NoticesContainer = styled(Container)`
  padding-bottom: 100px;

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    padding-bottom: 200px;
  }
`;
