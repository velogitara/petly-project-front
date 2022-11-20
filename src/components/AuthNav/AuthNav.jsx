import { useLocation } from 'react-router-dom';
import { AuthNavBox, AuthLink } from './AuthNav.styled';

const AuthNav = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <AuthNavBox>
      <AuthLink
        to="login"
        className={location.pathname === '/register' ? 'headerAuth' : 'headerAuth  active'}
      >
        Login
      </AuthLink>
      <AuthLink to="register" className={'headerAuth'}>
        Registration
      </AuthLink>
    </AuthNavBox>
  );
};

export default AuthNav;
