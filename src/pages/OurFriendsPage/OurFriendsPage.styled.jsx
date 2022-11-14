import styled from '@emotion/styled';
import { theme } from 'helpers';

const { backgrounds, shadows, fonts, screens, palette } = theme;

const Card = styled.li`
  background-color: ${backgrounds.secondary};
  text-align: center;
  border-radius: 40px;
  margin-bottom: 12px;
  padding: 12px 4px;
  box-shadow: ${shadows.card};
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BoxContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: start;
`;

const Title = styled.h2`
  font-family: ${fonts.primary},
  font-weight: 700;
  margin-bottom: 45px;
  font-size: 48px;
  line-height: 1.37;`;

const Name = styled.h3`
  font-family: ${fonts.primary};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.37;
  color: ${palette.accent};
`;

const WorkDaysList = styled.ul`
  display: none;
  position: absolute;
`;

const InfoTitle = styled.p`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.37;
  transition: color 250ms;
  &:hover {
    color: ${palette.accent};
  }
`;

const StyledComponents = {
  Card,
  Title,
  List,
  BoxContent,
  Name,
  WorkDaysList,
  InfoTitle,
};

export default StyledComponents;
