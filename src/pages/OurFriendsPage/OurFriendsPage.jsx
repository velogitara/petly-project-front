import { Container } from 'helpers';
import TitlePage from 'components/TitlePage';
import OurFriendSection from 'components/OurFriendSection';
import OurFriendsCards from 'components/OurFriendsCards';
import { useFriends } from 'hooks';

const OurFriendsPage = () => {
  const showWorkDays = e => {
    const elementChidren = e.currentTarget.children;
    if (!elementChidren[1]) return;

    if (elementChidren[1].style.visibility === 'visible') {
      elementChidren[1].style.visibility = 'hidden';
      return;
    }

    elementChidren[1].style.visibility = 'visible';
  };

  const friends = useFriends();

  return (
    <Container>
      <OurFriendSection>
        <TitlePage title="Our friends" />
        <OurFriendsCards showWorkdays={showWorkDays} friends={friends} />
      </OurFriendSection>
    </Container>
  );
};

export default OurFriendsPage;
