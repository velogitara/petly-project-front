import { AuthLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <AuthLink to="login" className={'link'}>
        Login
      </AuthLink>
      <AuthLink to="register" className={'link'}>
        Registration
      </AuthLink>
    </div>
  );
};

export default AuthNav;
