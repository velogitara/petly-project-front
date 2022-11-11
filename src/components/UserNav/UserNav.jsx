import { UserLink, IconSvg } from './UserNav.styled';

const UserNav = () => {
  return (
    <nav>
      <UserLink to="user" className={'link'}>
        <IconSvg width="28" height="28">
          <use href="../../assets/icons.svg#icon-account"></use>
        </IconSvg>
        Account
      </UserLink>
    </nav>
  );
};

export default UserNav;
