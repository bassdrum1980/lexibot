import { Outlet, Link } from 'react-router-dom';
import { Container } from 'components';

const App = () => (
  <Container>
    <Link to="/search">Search</Link>
    <Link to="/study">Study</Link>
    <Link to="/references">References</Link>
    <Outlet />
  </Container>
);

export default App;
