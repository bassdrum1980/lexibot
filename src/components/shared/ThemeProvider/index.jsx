import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

import * as routes from '../../../routing';
import './index.scss';

const ThemeProvider = ({ children }) => {
  // Get current pathname, strip of leading '/',
  // use it to define the current theme.
  let { pathname } = useLocation();
  pathname = pathname.replace(/^\/+/g, '');

  return (
    <div
      className={classnames(
        'theme-provider',
        pathname.startsWith(routes.searchURL)
          ? 'theme-provider--search'
          : 'theme-provider--default'
      )}
    >
      {children}
    </div>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
