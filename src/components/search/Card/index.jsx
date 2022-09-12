import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  // TODO: replace by shape -- PropTypes.shape
  meaning: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

const Card = ({
  meaning,
  handleOnClick,
}) => (
  <div className="card">
    <div className="card__title">
      <div className="card__partOfSpeech"></div>
      <div className="card__translation"></div>
    </div>
    <ul className="card__body">
      <li className="card__definition">{/* label/labels, def, link */}</li>
    </ul>
  </div>
);

Card.displayName = 'Card';
Card.propTypes = propTypes;

export default Card;
