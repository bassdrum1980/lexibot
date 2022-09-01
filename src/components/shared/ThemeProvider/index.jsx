import classnames from 'classnames';
import * as routes from '../../../routing';
import './index.scss';

const ThemeProvider = ({ children }) => {
  // Pathname defines the current theme.
  // Theme's css custom variables are passed with
  // a specific class.
  const { pathname } = document.location;

  return (
    <div className={classnames('theme-provider', {
      'theme-provider--search': pathname.startsWith(`/${routes.searchURL}`),
      'theme-provider--study': pathname.startsWith(`/${routes.studyURL}`),
    })}
    >
      {children}
    </div>
  );
};

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
