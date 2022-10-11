/**
 * Component let's user to build a card
 * out of data from the api
 */

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectDictionaryDefinition } from 'features';
import {
  CardFormHeader, CardFormSection, CardFormSections, Controls, Button,
} from 'components';

const propTypes = {
  definitionId: PropTypes.string.isRequired,
};

const ConfigureCard = ({ definitionId }) => {
  const definitionData = useSelector((state) => selectDictionaryDefinition(state, definitionId));
  const { word, partOfSpeech, definition } = definitionData;

  return (
    <>
      {definitionData.id}
      <CardFormHeader
        word={word}
        partOfSpeech={partOfSpeech}
        definition={definition}
      />
      <CardFormSections>
        <CardFormSection
          title="Examples"
          onClick={() => null}
        >
          Examples
        </CardFormSection>
        <CardFormSection
          title="Examples"
          onClick={() => null}
        >
          Examples
        </CardFormSection>
      </CardFormSections>
      <Controls>
        <Button
          type="submit"
          size="m"
          btnStyle="primary"
          width="fill"
          onClick={() => true}
        >
          Save Card
        </Button>
      </Controls>
    </>
  );
};

ConfigureCard.displayName = 'Configure Card';
ConfigureCard.propTypes = propTypes;
export default ConfigureCard;
