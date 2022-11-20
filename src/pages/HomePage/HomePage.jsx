import { Container } from 'helpers/common-styles/Container';
import HomeBlock from 'components/HomeBlock';
import HomeContainer from 'components/HomeContainer';
import HomeTitle from 'components/HomeTitle';
import HomeImg from 'components/HomeImg';

const HomePage = () => {
  return (
    <HomeBlock>
      <Container>
        <HomeContainer>
          <HomeTitle title="Take good care of your small pets" />
          <HomeImg />
        </HomeContainer>
      </Container>
    </HomeBlock>
  );
};

export default HomePage;
