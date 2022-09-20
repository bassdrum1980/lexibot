import { Outlet } from 'react-router-dom';

import { ThemeProvider } from 'components';
import { UserLoader, LoadingWrapper } from 'features';

const App = () => (
  <ThemeProvider>
    <UserLoader>
      <LoadingWrapper>
        <Outlet />
      </LoadingWrapper>
    </UserLoader>
  </ThemeProvider>
);

export default App;
