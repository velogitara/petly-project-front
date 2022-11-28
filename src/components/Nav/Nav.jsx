import PropTypes from 'prop-types';
import { NavContainer, NavBox, LinkNav } from './Nav.styled';

const Nav = ({ onCloseMenu }) => {
  return (
    <NavContainer>
      <NavBox>
        <LinkNav
          to="news"
          className={'header-link'}
          onClick={() => {
            onCloseMenu();
          }}
        >
          News
        </LinkNav>
        <LinkNav
          to="notices"
          className={'header-link'}
          onClick={() => {
            onCloseMenu();
          }}
        >
          Find pet
        </LinkNav>
        <LinkNav
          to="friends"
          className={'header-link'}
          onClick={() => {
            onCloseMenu();
          }}
        >
          Our friends
        </LinkNav>
      </NavBox>
    </NavContainer>
  );
};

Nav.propTypes = {
  onCloseMenu: PropTypes.func,
};

export default Nav;
