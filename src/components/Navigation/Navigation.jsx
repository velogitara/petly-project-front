import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import Nav from '../Nav';
import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import { NavigationBox } from './Navigation.styled';

const Navigation = ({ onWidth, onCloseMenu }) => {
  const isLogged = useSelector(selectAuthToken);

  return (
    <NavigationBox>
			{/* <UserNav onCloseMenu={onCloseMenu} /> <AuthNav onCloseMenu={onCloseMenu} /> */}
      {isLogged ? <UserNav onCloseMenu={onCloseMenu} /> : <AuthNav onCloseMenu={onCloseMenu} />}
      {onWidth >= 1280 && <Nav onCloseMenu={onCloseMenu} />}
    </NavigationBox>
  );
};

Navigation.propTypes = {
  onWidth: PropTypes.number.isRequired,
  onCloseMenu: PropTypes.func,
};

export default Navigation;
