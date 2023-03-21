import IconCheckRound from 'svg/IconCheckRound';
import './index.scss';

const Alert = ({ primaryText, secondaryText }) => (
  <div className="alert">
    <div className="alert-icon">
      <IconCheckRound width={70} height={70} />
    </div>
    <h2>{primaryText}</h2>
    <p>{secondaryText}</p>
  </div>
);

Alert.displayName = 'Alert Message';

export default Alert;
