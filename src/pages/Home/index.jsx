import { useState } from 'react';
import { Page, PageHeader, PageFooter, AppNav } from 'components';
import SearchField from 'features/query/SearchField';
import StudyBanner from 'features/study/StudyBanner';
import './index.scss';

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
    <Page className="page--narrow-padding home-page">
      {isNavOpen && <AppNav handleClose={handleNavClick} />}
      <PageHeader
        handleNavClick={handleNavClick}
        className="home-page__section home-page__section--first-child"
      />
      <SearchField className="home-page__section" />
      <StudyBanner className="home-page__section" />
      <PageFooter className="home-page__section home-page__section--last-child" />
    </Page>
  );
};

Home.displayName = 'Home Page';

export default Home;
