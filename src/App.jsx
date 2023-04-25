import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import LoadingWrapper from 'features/loading/LoadingWrapper';
import { ThemeProvider } from 'components';
import { searchURL } from './routing';

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate(searchURL);
  }, []);

  return (
    <ThemeProvider>
      <LoadingWrapper>
        <Outlet />
      </LoadingWrapper>
    </ThemeProvider>
  );
};

export default App;
