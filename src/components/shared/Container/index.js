import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import * as routes from '../../../routing';
import './index.scss';

const Container = ({ children }) => {
  // Get current pathname, strip of leading '/',
  // use it to define current theme.
  let { pathname } = useLocation();
  pathname = pathname.replace(/^\/+/g, '');

  return (
    <div className={classnames('container', {
      'container--search': pathname === routes.searchURL,
      'container--study': pathname === routes.studyURL,
    })}
    >
      {children}
    </div>
  );
};

Container.displayName = 'Container';

export default Container;
