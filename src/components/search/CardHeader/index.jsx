/**
 * Component renders card's header
 * used in 'ConfigureCard' and 'EditCard' features.
 */

import PropTypes from 'prop-types';

import { Pill } from 'components';
import './index.scss';

const propTypes = {
  partOfSpeech: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
};

const CardHeader = ({
  partOfSpeech,
  word,
  definition,
}) => (
  <div className="card-header">
    <Pill type={partOfSpeech}>{partOfSpeech}</Pill>
    <h2 className="card-header__title">{word}</h2>
    <div className="card-header__definition">{definition}</div>
  </div>
);

CardHeader.displayName = 'Card Header';
CardHeader.propTypes = propTypes;

export default CardHeader;
