import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import LoadingWrapper from 'features/loading/LoadingWrapper';
import { ThemeProvider } from 'components';
import { searchURL } from './routing';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserSignedOut,
  resetUserSignedOut,
} from 'features/loading/loading-slice';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate(searchURL);
  }, []);

  // Sign Out
  const dispatch = useDispatch();
  const isSignedOut = useSelector(selectUserSignedOut);
  useEffect(() => {
    if (isSignedOut) {
      dispatch(resetUserSignedOut());
      navigate(searchURL);
    }
  }, [isSignedOut, navigate]);

  return (
    <ThemeProvider>
      <LoadingWrapper>
        <Outlet />
      </LoadingWrapper>
    </ThemeProvider>
  );
};

export default App;
