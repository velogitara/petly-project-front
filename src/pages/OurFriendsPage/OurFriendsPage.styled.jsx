import styled from '@emotion/styled';
import { hover } from '@testing-library/user-event/dist/hover';
import { theme } from 'helpers';

const { backgrounds, shadows, fonts, screens, palette } = theme;

const OurFriendsCard = styled.li`
  background-color: ${backgrounds.secondary};
  text-align: center;
  border-radius: 40px;
  margin-bottom: 12px;
  padding: 12px 4px;
  box-shadow: ${shadows.card};
  width: 480px;
`;

const OurFriendsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const OurFriendsBoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
`;

const OurFriendsTitle = styled.h2`
  font-family: ${fonts.primary},
  font-weight: 700;
  margin-bottom: 45px;
  font-size: 48px;
  line-height: 1.37;`;

const OurFriendsName = styled.h3`
  font-family: ${fonts.primary};
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 1.37;
  color: ${palette.accent};
`;

const OurFriendsStyledComponents = {
  OurFriendsCard,
  OurFriendsTitle,
  OurFriendsList,
  OurFriendsBoxContent,
  OurFriendsName,
};

export default OurFriendsStyledComponents;
