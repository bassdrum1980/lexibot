import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectToken } from './user-slice';
import { signinURL } from '../../routing.js';
import { fetchUser } from 'features/user/user-slice-actions';
import {
  selectUserSignedOut,
  resetUserSignedOut,
  setDestination,
} from 'features/loading/loading-slice';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  // Checking authorization
  useEffect(() => {
    if (!token) {
      // Set destination to current location
      dispatch(setDestination(window.location.pathname));
      navigate(signinURL);
    }

    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, navigate]);

  // Sign Out
  // TODO: I'll leave it here for now, but I think it should be moved
  const isSignedOut = useSelector(selectUserSignedOut);
  useEffect(() => {
    if (isSignedOut) {
      dispatch(resetUserSignedOut());
      navigate(signinURL);
    }
  }, [isSignedOut, navigate]);

  return <Outlet />;
};

ProtectedRoute.displayName = 'Protected Route Wrapper';
export default ProtectedRoute;
