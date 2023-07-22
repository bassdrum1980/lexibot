import { useState } from 'react';
import { Page, PageHeader, PageFooter, AppNav, Modal } from 'components';
import SearchField from 'features/query/SearchField';
import StudyBanner from 'features/study/StudyBanner';
import Study from 'pages/Study';
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

  // Navigation
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Study
  const [isStudyOpen, setIsStudyOpen] = useState(false);
  const handleStudyClick = () => {
    setIsStudyOpen(!isStudyOpen);
  };

  return (
    <Page className="page--narrow-padding home-page">
      <PageHeader
        handleNavClick={handleNavClick}
        className="home-page__section home-page__section--first-child"
      />
      <SearchField className="home-page__section" />
      <StudyBanner
        className="home-page__section"
        handleStudyClick={handleStudyClick}
      />
      <PageFooter className="home-page__section home-page__section--last-child" />
      {isNavOpen && <AppNav handleClose={handleNavClick} />}
      {isStudyOpen && (
        <Modal>
          <Study />
        </Modal>
      )}
    </Page>
  );
};

Home.displayName = 'Home Page';

export default Home;
