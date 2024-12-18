/**
 * Component renders 'meaning' that comprises
 * - shared part of speech
 * - set of definitions (who share a given meaning and part of speech)
 */

import PropTypes from 'prop-types';

import IconChevronRight from 'svg/IconChevronRight';
import { Pill } from 'components';
import './index.scss';

const propTypes = {
  // eslint-disable-next-line react/require-default-props
  meaning: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        word: PropTypes.string.isRequired,
        definition: PropTypes.string.isRequired,
        examples: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.arrayOf(
              PropTypes.shape({
                value: PropTypes.string,
                id: PropTypes.string,
                isActive: PropTypes.bool,
              })
            ),
            id: PropTypes.string,
          })
        ),
        phoneticsText: PropTypes.string,
        phoneticsAudio: PropTypes.string,
        synonyms: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string,
          })
        ),
        antonyms: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.string,
            id: PropTypes.string,
          })
        ),
      })
    ),
  }),
  handleClick: PropTypes.func.isRequired,
};

export const Card = ({ meaning, handleClick }) => {
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
            onClick={() => handleClick(id)}
            onKeyDown={() => handleClick(id)}
          >
            <p>{definition}</p>
            <div className="card__action">
              <button
                className="card__action__btn"
                type="button"
              >
                <IconChevronRight />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Card.propTypes = propTypes;
