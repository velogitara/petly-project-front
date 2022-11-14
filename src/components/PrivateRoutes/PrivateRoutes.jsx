import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogged = useSelector(selectAuthToken);

  return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
