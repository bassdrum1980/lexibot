import { useEffect } from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectToken } from './user-slice';
import { signinURL } from '../../routing.js';
import { fetchUser } from 'features/user/user-slice-actions';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  // Fetch profile
  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, dispatch]);

  if (!token) {
    return <Navigate to={signinURL} />;
  }

  return <Outlet />;
};

ProtectedRoute.displayName = 'Protected Route Wrapper';
export default ProtectedRoute;
