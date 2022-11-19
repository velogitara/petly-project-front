import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import UserNav from '../UserNav';
import AuthNav from '../AuthNav';
import Nav from '../Nav';
import { NavigationBox } from '../Navigation/Navigation.styled';

const Menu = ({ onWidth }) => {
  const isLogged = useSelector(selectAuthToken);

  return (
    <NavigationBox>
      {onWidth < 768 && <>{isLogged ? <UserNav /> : <AuthNav />}</>}
      <Nav />
    </NavigationBox>
  );
};

Menu.propTypes = {
  onWidth: PropTypes.number.isRequired,
};

export default Menu;
