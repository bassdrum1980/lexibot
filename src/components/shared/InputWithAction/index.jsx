/**
 * The component expects a 32x32 svg icon
 * passed as children.
 */

import PropTypes from 'prop-types';

import { Input } from 'components';
import './index.scss';

const propTypes = {
  iconName: PropTypes.string.isRequired,
};

const InputWithAction = ({ iconName, children, ...rest }) => (
  <div className="action-wrapper">
    <Input type="text" {...rest} />
    <button className="action-wrapper__button" type="submit">
      {children}
    </button>
  </div>
);

InputWithAction.displayName = 'Input With Action';
InputWithAction.propTypes = propTypes;

export default InputWithAction;
