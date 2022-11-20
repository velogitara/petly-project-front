import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
  perspective: 100px;
  transition: all 400ms linear;
  &:hover{
    transform: scale(1.01);
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 60px 75px 40px;
    background-color: ${({ theme }) => theme.backgrounds.secondary};
    border-radius: 40px;
    box-shadow: ${({ theme }) => theme.shadows.primary};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    padding: 60px 80px;
    width: 618px;
    max-width: 618px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.36;
  letter-spacing: 0.04em;
`;

export const Message = styled.p`
  display: inline-flex;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.palette.primary};
  opacity: 0.6;
`;

export const AuthLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.palette.link};
  opacity: 1;
`;
