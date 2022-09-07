import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  className: '',
};

const Page = ({
  className,
  children,
}) => (
  <div className={classnames(
    'page',
    Array.isArray(className) ? className.join(' ') : className,
  )}
  >
    {children}
  </div>
);

Page.displayName = 'Page';
Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
