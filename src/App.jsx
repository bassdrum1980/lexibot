import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingWrapper from 'features/loading/LoadingWrapper';
import { ThemeProvider } from 'components';
import {
  selectUserSignedOut,
  resetUserSignedOut,
} from 'features/loading/loading-slice';

const App = () => {
  // Sign Out
  const dispatch = useDispatch();
  const isSignedOut = useSelector(selectUserSignedOut);
  useEffect(() => {
    if (isSignedOut) {
      dispatch(resetUserSignedOut());
    }
  }, [isSignedOut]);

  return (
    <ThemeProvider>
      <LoadingWrapper>
        <Outlet />
      </LoadingWrapper>
    </ThemeProvider>
  );
};

export default App;
