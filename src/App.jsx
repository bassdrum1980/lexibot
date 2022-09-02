import { Outlet, Link } from 'react-router-dom';
import { ThemeProvider } from 'components';
import { UserLoader } from 'features';
import { WarningWrapper } from 'features';

const App = () => (
  <ThemeProvider>
    <UserLoader>
      <WarningWrapper>
        <Link to="/search">Search</Link>
        <Link to="/study">Study</Link>
        <Link to="/references">References</Link>
        <Outlet />
      </WarningWrapper>
    </UserLoader>
  </ThemeProvider>
);

export default App;
