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
      <div className="card__partOfSpeech">{meaning.partOfSpeech}</div>
      {meaning.translation && <div className="card__translation">{meaning.translation}</div>}
    </div>
    <ul className="card__body">
      {meaning.definitions.map((definition) => (
        <li
          className="card__definition"
          key={definition.id}
        >
          {definition.definition}
        </li>
      ))}
    </ul>
  </div>
);

Card.displayName = 'Card';
Card.propTypes = propTypes;

export default Card;
