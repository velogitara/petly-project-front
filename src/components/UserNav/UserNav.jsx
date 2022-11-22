import PropTypes from 'prop-types';
import { UserLink, IconSvg } from './UserNav.styled';
import icons from '../../assets/icons/icons.svg';

const UserNav = ({ onCloseMenu }) => {
  return (
    <nav>
      <UserLink
        to="user"
        className={'header-link'}
        onClick={() => {
          onCloseMenu();
        }}
      >
        <IconSvg>
          <use href={`${icons}#icon-account`}></use>
        </IconSvg>
        Account
      </UserLink>
    </nav>
  );
};

UserNav.propTypes = {
  onCloseMenu: PropTypes.func,
};

export default UserNav;
