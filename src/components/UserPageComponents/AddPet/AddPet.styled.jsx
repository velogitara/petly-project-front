import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const AddPetText = styled.p`
  margin-right: 15px;

  font-weight: 500;
  font-size: 20px;
  color: inherit;
`;

export const AddPetLink = styled(Link)`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.accent};
`;

export const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.palette.triadic};
  stroke: ${({ theme }) => theme.palette.triadic};
`;
