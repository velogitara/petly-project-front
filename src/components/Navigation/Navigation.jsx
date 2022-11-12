// import { useSelector } from 'react-redux';
import Nav from '../Nav';
import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import { NavBox } from './Navigation.styled';

const Navigation = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <NavBox>
      <Nav />
      {/* {!isLoggedIn ?  */}
      <AuthNav />
      {/* : */}
      <UserNav />
      {/* } */}
    </NavBox>
  );
};

export default Navigation;
