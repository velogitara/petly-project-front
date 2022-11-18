import { LogoutLink, SvgIcon, LogoutText } from './UserLogout.styled';
import icons from '../../../assets/icons/icons.svg';

const UserCard = () => {
  return (
    <LogoutLink to="logout">
      <SvgIcon>
        <use href={`${icons}#icon-logout`}></use>
      </SvgIcon>
      <LogoutText>Log Out</LogoutText>
    </LogoutLink>
  );
};

export default UserCard;
