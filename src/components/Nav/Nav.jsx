import { NavContainer, NavBox, LinkNav } from './Nav.styled';

const Nav = () => {
  return (
    <NavContainer>
      <NavBox>
        <LinkNav to="news" className={'link'}>
          News
        </LinkNav>
        <LinkNav to="notices/for-free" className={'link'}>
          Find pet
        </LinkNav>
        <LinkNav to="friends" className={'link'}>
          Our friends
        </LinkNav>
      </NavBox>
    </NavContainer>
  );
};

export default Nav;
