import { Icon } from 'components';

import './index.scss';

const Alert = ({ primaryText, secondaryText }) => (
  <div className="alert">
    <div className="alert-icon">
      <Icon name="check-round" size={70} />
    </div>
    <h2>{primaryText}</h2>
    <p>{secondaryText}</p>
  </div>
);

Alert.displayName = 'Alert Message';

export default Alert;
