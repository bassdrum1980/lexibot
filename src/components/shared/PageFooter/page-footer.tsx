import classnames from 'classnames';
import { Link } from 'react-router-dom';
import IconLogoCardsXL from 'svg/IconLogoCardsXL';
import './index.scss';

type PageFooterType = {
  className?: string | string[];
};

export const PageFooter: React.FC<PageFooterType> = ({ className }) => {
  return (
    <div
      className={classnames(
        'page-footer',
        Array.isArray(className) ? className.join(' ') : className
      )}
    >
      <IconLogoCardsXL />
      <div className="page-footer__copy">&copy; 2023 Lexibot</div>
      <div className="page-footer__nav">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/donotselldata">Do Not Sell My Data</Link>
      </div>
    </div>
  );
};
