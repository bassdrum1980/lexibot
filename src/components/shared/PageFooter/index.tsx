import { Link } from 'react-router-dom';
import IconLogoCardsXL from 'svg/IconLogoCardsXL';
import './index.scss';

const PageFooter = () => {
  return (
    <div className="page-footer">
      <IconLogoCardsXL />
      <div className="page-footer__copy">&copy; 2023 Lexibot</div>
      <div className="page-footer__nav">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/donotselldata">Do Not Sell My Data</Link>
      </div>
    </div>
  );
};

PageFooter.displayName = 'Page Footer';

export default PageFooter;
