import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAuthToken } from 'redux/authState';

const PublicRoutes = ({ redirectTo = '/', restricted = false }) => {
  const isLogged = useSelector(selectAuthToken);
  const shouldRedirect = isLogged && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Outlet />;
};

PublicRoutes.propTypes = {
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default PublicRoutes;
