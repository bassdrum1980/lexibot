import { useNavigate } from 'react-router-dom';
import { Modal } from 'components';
import IconPlus from 'svg/IconPlus';
import * as routes from '../../../routing';
import './index.scss';

type AppNavType = {
  handleClose: () => void;
};

const AppNav: React.FC<AppNavType> = ({ handleClose }) => {
  const navigate = useNavigate();
  const handleRedirect = (route: string): void => {
    handleClose();
    navigate(route);
  };

  return (
    <Modal className="modal--flex">
      <nav className="app-nav">
        <button
          className="app-nav__close"
          onClick={handleClose}
        >
          <IconPlus
            width={40}
            height={40}
            isRound={false}
          />
        </button>
        <ul className="app-nav__list">
          <li className="app-nav__list__item">
            <button
              className="app-nav__link"
              onClick={() => handleRedirect('/')}
            >
              Home
            </button>
          </li>
          <li className="app-nav__list__item">
            <button
              className="app-nav__link"
              onClick={() => handleRedirect(routes.searchURL)}
            >
              Search
            </button>
          </li>
          <li className="app-nav__list__item">
            <button
              className="app-nav__link"
              onClick={() => false}
            >
              Card
            </button>
          </li>
          <li className="app-nav__list__item">
            <button
              className="app-nav__link"
              onClick={() => false}
            >
              My Profile
            </button>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

AppNav.displayName = 'App Navigation Menu';

export default AppNav;
