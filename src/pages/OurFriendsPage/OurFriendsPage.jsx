import { Container } from 'helpers';
import OurFriendsTitle from 'components/OurFriendsTitle';
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
      <OurFriendsTitle />
      <OurFriendsCards showWorkdays={showWorkDays} friends={friends} />
    </Container>
  );
};

export default OurFriendsPage;
