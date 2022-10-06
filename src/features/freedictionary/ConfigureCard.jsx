/**
 * Component let's user to build a card
 * out of data from the api
 */

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectDictionaryDefinition } from 'features';
import { CardHeader } from 'components';

const propTypes = {
  definitionId: PropTypes.string.isRequired,
};

const ConfigureCard = ({ definitionId }) => {
  const definitionData = useSelector((state) => selectDictionaryDefinition(state, definitionId));
  const { word, partOfSpeech, definition } = definitionData;

  return (
    <>
      {definitionData.id}
      <CardHeader
        word={word}
        partOfSpeech={partOfSpeech}
        definition={definition}
      />
    </>
  );
};

ConfigureCard.displayName = 'Configure Card';
ConfigureCard.propTypes = propTypes;
export default ConfigureCard;
