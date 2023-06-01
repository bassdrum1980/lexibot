import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconBurgerXL from 'svg/IconBurgerXL';
import IconLogoCardsXL from 'svg/IconLogoCardsXL';
import IconLexibot from 'svg/IconLexibot';
import './index.scss';

const PageHeader = ({ handleNavClick }) => {
  // TODO:
  // This header will need to be rendered through portal
  // somewhere in the body
  // it's position will be fixed
  // it's height will change on page scroll
  // min, max and current heights need to be stored in custom variables
  // in order to clip content in page__content

  return (
    <div className="page-header">
      <div className="page-header__logo">
        <Link to="/">
          <IconLogoCardsXL />
        </Link>
      </div>
      <div className="page-header__lexibot">
        <Link to="/">
          <IconLexibot />
        </Link>
      </div>
      <div className="page-header__nav">
        <button
          onClick={handleNavClick}
          className="page-header__nav__btn"
        >
          <IconBurgerXL color="#fff" />
        </button>
      </div>
    </div>
  );
};

PageHeader.displayName = 'Page Header';

export default PageHeader;
