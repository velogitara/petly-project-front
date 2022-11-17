import { Container } from 'helpers/common-styles/Container';
import { Home, Content, Title, ImageBlock } from './HomePage.styled';
import imageDesktop from '../../assets/images/hero-624.png';
import imageTablet from '../../assets/images/hero-699.png';
import imageMobile from '../../assets/images/hero-320.png';

const HomePage = () => {
  return (
    <Home>
      <Container>
        <Content>
          <Title>Take good care of your small pets</Title>
          <ImageBlock>
            <source srcSet={imageMobile} media="(max-width: 767px)" />
            <source srcSet={imageTablet} media="(max-width: 1279px)" />
            <source srcSet={imageDesktop} media="(min-width: 1280px)" />
            <img src={imageDesktop} alt="hero" />
          </ImageBlock>
        </Content>
      </Container>
    </Home>
  );
};

export default HomePage;
