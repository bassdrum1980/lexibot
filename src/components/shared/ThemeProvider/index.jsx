import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

import * as routes from '../../../routing';
import './index.scss';

const ThemeProvider = ({ children }) => {
  // Get current pathname, strip of leading '/',
  // use it to define current theme.
  let { pathname } = useLocation();
  pathname = pathname.replace(/^\/+/g, '');

  return (
    <div className={classnames('theme-provider', {
      'theme-provider--search': pathname.startsWith(routes.searchURL),
      'theme-provider--study': pathname.startsWith(routes.studyURL),
    })}
    >
      {children}
    </div>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
