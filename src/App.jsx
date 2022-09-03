import { Outlet, Link } from 'react-router-dom';
import { ThemeProvider } from 'components';
import { UserLoader } from 'features';
import { LoadingWrapper } from 'features';

const App = () => (
  <ThemeProvider>
    <UserLoader>
      <LoadingWrapper>
        <Link to="/search">Search</Link>
        <Link to="/study">Study</Link>
        <Link to="/references">References</Link>
        <Outlet />
      </LoadingWrapper>
    </UserLoader>
  </ThemeProvider>
);

export default App;
