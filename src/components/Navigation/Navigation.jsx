import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import Nav from '../Nav';
import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import { NavigationBox } from './Navigation.styled';

const Navigation = ({ onWidth }) => {
  const isLogged = useSelector(selectAuthToken);

  return (
    <NavigationBox>
      {/* <UserNav /> <AuthNav /> */}
      {isLogged ? <UserNav /> : <AuthNav />}
      {onWidth >= 1280 && <Nav />}
    </NavigationBox>
  );
};

Navigation.propTypes = {
  onWidth: PropTypes.number.isRequired,
};

export default Navigation;
