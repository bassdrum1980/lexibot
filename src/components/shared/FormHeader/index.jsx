/**
 * Component renders a generic header for full-page forms.
 */
import PropTypes from 'prop-types';

import { Icon } from 'components';
import './index.scss';

const propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'Back',
};

const FormHeader = ({ title, onClick }) => (
  <div className="form-header">
    <button
      onClick={onClick}
      className="form-header__btn"
      type="button"
    >
      <Icon
        name="chevron-left"
        size={32}
      />
    </button>
    {title}
  </div>
);

FormHeader.displayName = 'Form Header';
FormHeader.propTypes = propTypes;
FormHeader.defaultProps = defaultProps;
export default FormHeader;
