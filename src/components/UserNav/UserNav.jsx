import { UserLink, IconSvg } from './UserNav.styled';
import icons from "../../assets/icons/icons.svg"

const UserNav = () => {
  return (
    <nav>
      <UserLink to="user" className={'link'}>
        <IconSvg width="28" height="28">
					<use href={`${icons}#icon-account`}></use>
        </IconSvg>
        Account
      </UserLink>
    </nav>
  );
};

export default UserNav;
