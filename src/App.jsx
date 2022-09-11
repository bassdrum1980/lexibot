import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'components';
import { UserLoader } from 'features';
import { LoadingWrapper } from 'features';

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
