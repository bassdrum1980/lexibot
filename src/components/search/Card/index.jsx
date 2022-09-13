import PropTypes from 'prop-types';
import { Pill, Icon } from 'components';
import './index.scss';

const propTypes = {
  // eslint-disable-next-line react/require-default-props
  meaning: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    meanings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      word: PropTypes.string.isRequired,
      definition: PropTypes.string.isRequired,
      example: PropTypes.string,
      phoneticsText: PropTypes.string,
      phoneticsAudio: PropTypes.string,
      synonyms: PropTypes.arrayOf(PropTypes.string),
      antonyms: PropTypes.arrayOf(PropTypes.string),
    })),
  }),
  handleOnClick: PropTypes.func.isRequired,
};

const Card = ({
  meaning,
  handleOnClick,
}) => (
  <div className="card">
    <div className="card__title">
      <div className="card__partOfSpeech">
        <Pill type={meaning.partOfSpeech}>{meaning.partOfSpeech}</Pill>
      </div>
      {meaning.translation && <div className="card__translation">{meaning.translation}</div>}
    </div>
    <ul className="card__body">
      {meaning.definitions.map((definition) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          key={definition.id}
          className="card__definition"
          onClick={() => handleOnClick(definition)}
          onKeyDown={() => handleOnClick(definition)}
        >
          <p>
            {definition.definition}
          </p>
          <div className="card__action">
            <button
              className="card__action__btn"
              type="submit"
            >
              <Icon
                name="chevron-o"
                size={32}
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Card.displayName = 'Card';
Card.propTypes = propTypes;

export default Card;
