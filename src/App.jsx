import { Outlet, Link } from 'react-router-dom';
import { Container, Warning } from 'components';

const App = () => (
  <Container>
    <Warning
      className="warning--error"
      title="Server Error"
      message={'Looks like something unexpected\njust has happened...'}
      onClick={() => console.log('click')}
    />
    <Link to="/search">Search</Link>
    <Link to="/study">Study</Link>
    <Link to="/references">References</Link>
    <Outlet />
  </Container>
);

export default App;
