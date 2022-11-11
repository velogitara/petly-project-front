import { NavigationLink } from './Nav.styled';

const Nav = () => {
  return (
    <nav>
      <NavigationLink to="news" className={'link'}>
        News
      </NavigationLink>
      <NavigationLink to="notices" className={'link'}>
        Find pet
      </NavigationLink>
      <NavigationLink to="friends" className={'link'}>
        Our friend
      </NavigationLink>
    </nav>
  );
};

export default Nav;
