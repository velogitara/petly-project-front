import { useLocation } from 'react-router-dom';
import { AuthNavBox, AuthLink } from './AuthNav.styled';

const AuthNav = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <AuthNavBox>
      <AuthLink to="login" className={location.pathname === '/register' ? 'link' : 'link  active'}>
        Login
      </AuthLink>
      <AuthLink to="register" className={'link'}>
        Registration
      </AuthLink>
    </AuthNavBox>
  );
};

export default AuthNav;
