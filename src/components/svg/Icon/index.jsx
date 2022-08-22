import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';
import ReactDOMServer from 'react-dom/server';
import SvgSprite from 'components/svg/SvgSprite';

const iconPortal = document.getElementById('icon-portal');
if (!iconPortal) {
  const divPortal = document.createElement('div');
  divPortal.setAttribute('id', 'icon-portal');
  document.body.appendChild(divPortal);
  const sprites = ReactDOMServer.renderToString(<SvgSprite />);
  divPortal.insertAdjacentHTML('beforeend', sprites);
};

const propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  fillColor: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  name: '',
  color: '',
  size: '',
  fillColor: '',
  className: '',
};

const Icon = ({
  name,
  color,
  size,
  fillColor = 'none',
  className,
  rest,
}) => (
  <svg
    role="img"
    width={`${size}px`}
    height={`${size}px`}
    stroke={color}
    fill={fillColor}
    className={classnames(
      'icon',
      Array.isArray(className) ? className.join(' ') : className,
    )}
    {...rest}
  >
    <use href={`#${name}`} />
  </svg>
);

Icon.displayName = 'Icon';
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
