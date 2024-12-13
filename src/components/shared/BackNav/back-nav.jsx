/**
 * Component renders a generic header for full-page forms.
 */
import PropTypes from 'prop-types';
import IconChevronLeft from 'svg/IconChevronLeft';
import './index.scss';

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'Back',
};

export const BackNav = ({ title, onClick }) => (
  <div className="form-header">
    <button
      onClick={onClick}
      className="form-header__btn"
      type="button"
    >
      <IconChevronLeft />
    </button>
    {title}
  </div>
);

BackNav.propTypes = propTypes;
BackNav.defaultProps = defaultProps;
