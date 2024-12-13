import classnames from 'classnames';
import './index.scss';

type PageType = {
  className: string | string[];
  children: React.ReactNode;
};

export const Page: React.FC<PageType> = ({ className, children }) => (
  <div
    className={classnames(
      'page',
      Array.isArray(className) ? className.join(' ') : className
    )}
  >
    {children}
  </div>
);

// TODO: add page__content-wrapper div (wrap it around page__content)
// page__content will remain scrollable
// page__content will be clipped (to hide under header, but showing it's scrollbar)
// see index.scss for details
