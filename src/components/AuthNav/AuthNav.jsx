import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { AuthNavBox, AuthLink } from './AuthNav.styled';

const AuthNav = ({ onCloseMenu }) => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <AuthNavBox>
      <AuthLink
        to="login"
        className={location.pathname === '/register' ? 'header-link' : 'header-link  active'}
        onClick={() => {
          onCloseMenu();
        }}
      >
        Login
      </AuthLink>
      <AuthLink
        to="register"
        className={'header-link'}
        onClick={() => {
          onCloseMenu();
        }}
      >
        Registration
      </AuthLink>
    </AuthNavBox>
  );
};

AuthNav.propTypes = {
  onCloseMenu: PropTypes.func,
};

export default AuthNav;
