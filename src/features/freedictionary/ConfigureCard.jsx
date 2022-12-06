/**
 * Component allows the user to build a card
 * out of data from the api
 */

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { selectDictionaryDefinition } from 'features';
import {
  CardFormHeader,
  CardFormBody,
  CardFormSection,
  Controls,
  Button,
  VariantPicker,
  ExamplePicker,
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
    currentSynonymId: '',
    currentAntonymId: '',
    currentExampleId: definitionData.examples[0]?.id || '',
    hints: [],
    currentHintId: '',
  });

  const handleAddVariant = (value, key, currentKey) => {
    const id = nanoid();

    setCard({
      ...card,
      [key]: [...card[key], { value, id }],
      [currentKey]: id,
    });
  };

  return (
    <>
      <CardFormHeader
        word={card.word}
        partOfSpeech={card.partOfSpeech}
        definition={card.definition}
      />
      <CardFormBody>
        <CardFormSection
          title="Examples"
          addLabel="example"
          onAddVariant={(value) =>
            handleAddVariant(value, 'examples', 'currentExampleId')
          }
        >
          <ExamplePicker
            examples={card.examples}
            selected={card.currentExampleId}
            onSelect={(id) =>
              setCard({
                ...card,
                currentExampleId: card.currentExampleId === id ? '' : id,
              })
            }
            onCut={(id) => console.log(id)}
            emptyText="No available examples, bummer. Add your own example."
          />
        </CardFormSection>
        <CardFormSection
          title="Synonyms"
          addLabel="synonym"
          onAddVariant={(value) =>
            handleAddVariant(value, 'synonyms', 'currentSynonymId')
          }
        >
          <VariantPicker
            variants={card.synonyms}
            selected={card.currentSynonymId}
            onSelect={(id) =>
              setCard({
                ...card,
                currentSynonymId: card.currentSynonymId === id ? '' : id,
              })
            }
            emptyText="We couldn’t find any synonyms. You can add a synonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection
          title="Antonyms"
          addLabel="antonym"
          onAddVariant={(value) =>
            handleAddVariant(value, 'antonyms', 'currentAntonymId')
          }
        >
          <VariantPicker
            variants={card.antonyms}
            selected={card.currentAntonymId}
            onSelect={(id) =>
              setCard({
                ...card,
                currentAntonymId: card.currentAntonymId === id ? null : id,
              })
            }
            emptyText="We couldn’t find any antonyms. You can add an antonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection
          title="Hint"
          addLabel="hint"
          onAddVariant={(value) =>
            handleAddVariant(value, 'hints', 'currentHintId')
          }
        >
          <VariantPicker
            variants={card.hints}
            selected={card.currentHintId}
            onSelect={(id) =>
              setCard({
                ...card,
                currentHintId: card.currentHintId === id ? null : id,
              })
            }
            emptyTitle="Don’t overuse hints"
            emptyText="We recommend using hints only in cases where it is possible to confuse two or more similar cards. If this is not the case, we suggest you go ahead without a hint."
          />
        </CardFormSection>
      </CardFormBody>
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
