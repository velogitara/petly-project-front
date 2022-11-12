import { AuthLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <nav>
      <AuthLink to="login" className={'link active'}>
        Login
      </AuthLink>
      <AuthLink to="register" className={'link'}>
        Registration
      </AuthLink>
    </nav>
  );
};

export default AuthNav;
