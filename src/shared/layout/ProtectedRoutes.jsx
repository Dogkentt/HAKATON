import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context';
import Header from '../../wigets/Header';

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <div className="container">
      <Header />
      
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default ProtectedRoutes;