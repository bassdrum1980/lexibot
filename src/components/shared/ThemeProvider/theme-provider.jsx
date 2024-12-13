import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as routes from '../../../routing';

// Depending on the current route, the theme changes.
// This is done by adding a class to the body element.
export const ThemeProvider = ({ children }) => {
  // Get current pathname, strip of leading '/',
  let { pathname } = useLocation();
  pathname = pathname.replace(/^\/+/g, '');

  useEffect(() => {
    document.body.classList.add(
      pathname.startsWith(routes.searchURL) ? 'theme-search' : 'theme-default'
    );
    return () => {
      document.body.className = '';
    };
  }, [pathname]);

  return children;
};
