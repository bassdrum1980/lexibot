/**
 * Component allows the user to build a card
 * out of data from the api
 */

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { selectDictionaryDefinition } from 'features';
import {
  CardFormHeader,
  CardFormSections,
  CardFormSection,
  Controls,
  Button,
  VariantPicker,
} from 'components';

const propTypes = {
  definitionId: PropTypes.string.isRequired,
};

const ConfigureCard = ({ definitionId }) => {
  const definitionData = useSelector((state) =>
    selectDictionaryDefinition(state, definitionId)
  );

  const [card, setCard] = useState({
    ...definitionData,
    currentSynonym: null,
    currentAntonym: null,
  });

  return (
    <>
      <CardFormHeader
        word={card.word}
        partOfSpeech={card.partOfSpeech}
        definition={card.definition}
      />
      <CardFormSections>
        <CardFormSection title="Synonyms" onClick={() => null}>
          <VariantPicker
            variants={card.synonyms}
            selected={card.currentSynonym}
            onSelect={(synonym) =>
              setCard({ ...card, currentSynonym: synonym })
            }
            emptyText="We couldn’t find any synonyms. You can add a synonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection title="Examples" onClick={() => null}>
          Examples
        </CardFormSection>
        <CardFormSection title="Synonyms" onClick={() => null}>
          <VariantPicker
            variants={['traitorous', 'disloyal', 'perfidious', 'faithless']}
            selected="traitorous"
            onSelect={() => null}
          />
        </CardFormSection>
        <CardFormSection title="Synonyms" onClick={() => null}>
          <VariantPicker
            variants={card.synonyms}
            onSelect={() => null}
            emptyText="We couldn’t find any synonyms. You can add a synonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection title="Antonyms" onClick={() => null}>
          <VariantPicker
            variants={['loyal', 'faithful']}
            onSelect={() => null}
          />
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
