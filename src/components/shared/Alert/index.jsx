/**
 * Component is shown when the user finishes a flow,
 * e.g. — creates new card, finishes a study session,
 * updates preferences...
 */

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
