import classnames from 'classnames';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { AppNav } from 'components';
import { Page, PageHeader } from 'components';

const Home = () => {
  // TODO: render pageHeader through portal
  // to the body element

  // импортирую шапку, отдаю в неё обработчик для меню
  // импортирую меню, завожу стейт для открытия/закрытия меню
  // фичи
  // searchField
  // баннер тренировки
  // what's trending
  // out of your comfort zone
  // импортирую футер

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Page className={classnames('page--narrow-padding')}>
      <PageHeader handleNavClick={handleNavClick} />
      <h1>Home</h1>
      {isNavOpen && <AppNav handleClose={handleNavClick} />}
    </Page>
  );
};

Home.displayName = 'Home Page';

export default Home;
