import PropTypes from 'prop-types';
import { NavContainer, NavBox, LinkNav } from './Nav.styled';

const Nav = ({ onOpen }) => {
  return (
    <NavContainer className={onOpen ? 'isOpen' : ''}>
			<NavBox>
				<LinkNav to="news" className={'link'}>
        News
      </LinkNav>
      <LinkNav to="notices/for-free" className={'link'}>
        Find pet
      </LinkNav>
      <LinkNav to="friends" className={'link'}>
        Our friend
      </LinkNav>
			</NavBox>
    </NavContainer>
  );
};

Nav.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default Nav;
