import Logo from './Logo';
import Navigation from './Navigation';
import { HeaderBox } from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <Logo />
      <Navigation />
    </HeaderBox>
  );
};

export default Header;
