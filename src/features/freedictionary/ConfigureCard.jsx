/**
 * Component let's user to build a card
 * out of data from the api
 */

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectDictionaryDefinition } from 'features';

const propTypes = {
  definitionId: PropTypes.string.isRequired,
};

const ConfigureCard = ({ definitionId }) => {
  const definition = useSelector((state) => selectDictionaryDefinition(state, definitionId));

  return (
    <>
      {definition.id}
    </>
  );
};

ConfigureCard.displayName = 'Configure Card';
ConfigureCard.propTypes = propTypes;
export default ConfigureCard;
