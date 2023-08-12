import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from './user-slice';
import { signinURL } from '../../routing.js';
import { fetchUser } from 'features/user/user-slice-actions';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  // Fetch profile
  useEffect(() => {
    if (token) {
      dispatch(fetchUser());
    }
  }, [token, dispatch]);

  if (!token) {
    return <Navigate to={signinURL} />;
  }

  return <Outlet />;
};

ProtectedRoute.displayName = 'Protected Route Wrapper';
export default ProtectedRoute;
