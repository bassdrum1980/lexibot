/**
 * Component renders 'meaning' that comprises
 * - shared part of speech
 * - set of definitions (who share a given meaning and part of speech)
 */

import PropTypes from 'prop-types';

import { Pill, Icon } from 'components';
import './index.scss';

const propTypes = {
  // eslint-disable-next-line react/require-default-props
  meaning: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(PropTypes.shape({
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
}) => {
  const { partOfSpeech, definitions } = meaning;

  return (
    <div className="card">
      <div className="card__title">
        <div className="card__partOfSpeech">
          <Pill type={partOfSpeech}>{partOfSpeech}</Pill>
        </div>
      </div>
      <ul className="card__body">
        {definitions.map(({ id, definition }) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            key={id}
            className="card__definition"
            onClick={() => handleOnClick(id)}
            onKeyDown={() => handleOnClick(id)}
          >
            <p>
              {definition}
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
};

Card.displayName = 'Card';
Card.propTypes = propTypes;

export default Card;
