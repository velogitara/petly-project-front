// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import { NavigationBox } from './Navigation.styled';

const Navigation = ({ onOpen }) => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <NavigationBox className={onOpen ? 'isOpen' : ''}>
      {/* {!isLoggedIn ?  */}
      <AuthNav />
      {/* : */}
      <UserNav />
      {/* } */}
      <Nav onOpen={onOpen} />
    </NavigationBox>
  );
};

Navigation.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default Navigation;
