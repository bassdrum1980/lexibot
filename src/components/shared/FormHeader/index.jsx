/**
 * Component renders a generic header for full-page forms.
 */
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  title: 'Back',
};

const FormHeader = ({ title, onClick }) => (
  <div className="form-header">
    {title}
  </div>
);

FormHeader.displayName = 'Form Header';
FormHeader.propTypes = propTypes;
FormHeader.defaultProps = defaultProps;
export default FormHeader;
