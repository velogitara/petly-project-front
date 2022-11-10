import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <div>
      <NavLink to="user" className={'link'}>
        Account
      </NavLink>
    </div>
  );
};

export default UserNav;
