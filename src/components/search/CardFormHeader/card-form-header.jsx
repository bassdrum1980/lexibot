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

export const CardFormHeader = ({ partOfSpeech, word, definition }) => (
  <div className="card-form-header">
    <Pill type={partOfSpeech}>{partOfSpeech}</Pill>
    <h2 className="card-form-header__title">{word}</h2>
    <div className="card-form-header__definition">{definition}</div>
  </div>
);

CardFormHeader.propTypes = propTypes;
