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
  @media (min-width: ${screens.tablet}) {
    margin-bottom: 32px;
    margin-right: 32px;
    flex-basis: calc(100% / 2 - 32px);
    padding: 16px 17px;
  }

  @media (min-width: ${screens.desktop}) {
    flex-basis: calc(100% / 3 - 32px);
  } ;
`;

const CardPic = styled.img`
  margin-right: 12px;
  width: 110px;
  @media (min-width: ${screens.tablet}) {
    margin-right: 14px;
    width: 120px;
  }
  @media (min-width: ${screens.desktop}) {
    margin-right: 12px;
    width: 158px;
  } ;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: ${screens.tablet}) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -32px;
    margin-right: -32px;
  } ;
`;

const BoxContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  text-align: start;
`;

const Title = styled.h2`
  font-family: ${fonts.primary},
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 1.38;
   @media (min-width: ${screens.tablet}) {
    font-size: 48px;
    margin-bottom: 45px;
   } ;
   
    @media (min-width: ${screens.desktop}) {
      margin-bottom: 60px;
   }`;

const Name = styled.h3`
  font-family: ${fonts.primary};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.33;
  color: ${palette.accent};
  @media (min-width: ${screens.tablet}) {
    font-size: 20px;
    line-height: 1.35;
  } ;
`;

const WorkDaysList = styled.ul`
  visibility: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(0, 100%);

  background-color: ${backgrounds.secondary};
  border: 1px solid ${palette.accent};
  border-radius: 8px;
  box-shadow: ${shadows.card};
  padding: 12px;
`;

const InfoBox = styled.div`
  position: relative;
`;

const InfoTitle = styled.p`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.37;
  transition: color 250ms;
  &:hover {
    color: ${palette.accent};
    cursor: pointer;
  }

  @media (min-width: ${screens.tablet}) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media (min-width: ${screens.desktop}) {
    font-size: 16px;
    line-height: 1.38;
  }
`;

const InfoLinks = styled.a`
  font-family: inherit;
  line-height: inherit;
  text-decoration: none;
  color: inherit;
`;

const InfoAddress = styled.a`
  font-family: inherit;
  line-height: inherit;
  text-decoration: underline;
  color: inherit;
`;

const WorkDaysItem = styled.li`
  font-family: ${fonts.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const WorkDaysTime = styled.span`
  margin-left: 12px;
`;

const StyledComponents = {
  Card,
  Title,
  List,
  BoxContent,
  Name,
  WorkDaysList,
  InfoTitle,
  InfoBox,
  InfoLinks,
  InfoAddress,
  CardPic,
  WorkDaysItem,
  WorkDaysTime,
};

export default StyledComponents;
