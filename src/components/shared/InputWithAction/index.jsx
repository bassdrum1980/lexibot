import PropTypes from 'prop-types';
import { Input, Icon } from 'components';
import './index.scss';

const propTypes = {
  iconName: PropTypes.string.isRequired,
};

const InputWithAction = ({
  iconName,
  ...rest
}) => (
  <div className="action-wrapper">
    <Input
      type="text"
      {...rest}
    />
    <button
      className="action-wrapper__button"
      type="submit"
    >
      <Icon
        name={iconName}
        size={32}
        fillColor="var(--gray1000)"
      />
    </button>
  </div>
);

InputWithAction.displayName = 'Input With Action';
InputWithAction.propTypes = propTypes;

export default InputWithAction;
