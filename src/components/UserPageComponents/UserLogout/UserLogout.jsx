import { LogoutButton, SvgIcon, LogoutText } from './UserLogout.styled';
import icons from '../../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';

import { useSignOutMutation } from '../../../redux/authState/authSlice';

const UserCard = () => {
  const authId = useSelector(selectAuthId);

  const [logout] = useSignOutMutation(authId);

  return (
    <LogoutButton type="button" onClick={logout}>
      <SvgIcon>
        <use href={`${icons}#icon-logout`}></use>
      </SvgIcon>
      <LogoutText>Log Out</LogoutText>
    </LogoutButton>
  );
};

export default UserCard;
