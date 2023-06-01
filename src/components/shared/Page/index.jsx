import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

// TODO: add page__content-wrapper div (wrap it around page__content)
// page__content will remain scrollable
// page__content will be clipped (to hide under header, but showing it's scrollbar)
// see index.scss for details
const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  className: '',
};

const Page = ({ className, children }) => (
  <div
    className={classnames(
      'page',
      Array.isArray(className) ? className.join(' ') : className
    )}
  >
    <div className="page__content">{children}</div>
  </div>
);

Page.displayName = 'Page';
Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
