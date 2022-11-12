import { Container } from 'helpers';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { HeaderBox } from './Header.styled';

const Header = () => {
  return (
    <header>
      <Container>
        <HeaderBox>
          <Logo />
          <Navigation />
        </HeaderBox>
      </Container>
    </header>
  );
};

export default Header;
