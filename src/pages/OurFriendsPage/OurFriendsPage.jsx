import sponsors from './sponsors.json';
import { Container } from 'helpers';
import OurFriendsTitle from 'components/OurFriendsTitle';
import OurFriendsCards from 'components/OurFriendsCards';

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

  return (
    <Container>
      <OurFriendsTitle />
      <OurFriendsCards showWorkdays={showWorkDays} sponsors={sponsors} />
    </Container>
  );
};

export default OurFriendsPage;
