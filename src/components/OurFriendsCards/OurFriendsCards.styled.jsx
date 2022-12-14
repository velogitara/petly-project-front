import styled from '@emotion/styled';

const Card = styled.li`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  text-align: center;
  border-radius: 40px;
  padding: 12px 4px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 16px 17px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-basis: calc(100% / 3 - 32px);
  } ;
`;

const CardPic = styled.img`
  margin-right: 12px;
  width: 110px;
  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-right: 14px;
    width: 120px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-right: 12px;
    width: 158px;
  } ;
`;

const List = styled.ul`
  display: grid;
  gap: 12px 0;
  grid-template-columns: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: ${({ theme }) => theme.screens.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  } ;
`;

const BoxContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;
  text-align: start;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.33;
  color: ${({ theme }) => theme.palette.accent};
  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 20px;
    line-height: 1.35;
  } ;
`;

const NameLink = styled.a`
  font-family: inherit;
  font-weight: inherit;
  margin-bottom: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  transition: ${({ theme }) => theme.animations.transition};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.hoverAccent};
  }
`;

const WorkDaysList = styled.ul`
  visibility: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(0, 100%);

  background-color: ${({ theme }) => theme.backgrounds.secondary};
  border: 1px solid ${({ theme }) => theme.palette.accent};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 12px;
`;

const InfoBox = styled.div`
  position: relative;
`;

const InfoTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.37;
  transition: ${({ theme }) => theme.animations.transition};
  &:hover {
    color: ${({ theme }) => theme.palette.accent};
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 14px;
    line-height: 1.36;
  }
  @media (min-width: ${({ theme }) => theme.screens.desktop}) {
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
  font-family: ${({ theme }) => theme.fonts.primary};
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
  NameLink,
};

export default StyledComponents;
