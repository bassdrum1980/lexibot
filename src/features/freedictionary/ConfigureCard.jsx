/**
 * Component allows the user to build a card
 * out of data from the api
 */

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
import { selectDictonaryCurrentId } from './freedictionary-slice';

const ConfigureCard = () => {
  const definitionId = useSelector(selectDictonaryCurrentId);

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

  const handleSelectVariant = (id, currentKey) => {
    setCard({
      ...card,
      [currentKey]: card[currentKey] === id ? null : id,
    });
  };

  const handleCrop = (cropped) => {
    const updatedExamples = card.examples.map((example) =>
      example.id === card.currentExampleId
        ? { value: cropped, id: example.id }
        : example
    );

    setCard({
      ...card,
      examples: updatedExamples,
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
          handleAdd={(value) =>
            handleAddVariant(value, 'examples', 'currentExampleId')
          }
        >
          <ExamplePicker
            examples={card.examples}
            selected={card.currentExampleId}
            handleSelect={(id) => handleSelectVariant(id, 'currentExampleId')}
            handleCrop={handleCrop}
            emptyText="No available examples, bummer. Add your own example."
          />
        </CardFormSection>
        <CardFormSection
          title="Synonyms"
          addLabel="synonym"
          handleAdd={(value) =>
            handleAddVariant(value, 'synonyms', 'currentSynonymId')
          }
        >
          <VariantPicker
            variants={card.synonyms}
            selected={card.currentSynonymId}
            handleSelect={(id) => handleSelectVariant(id, 'currentSynonymId')}
            emptyText="We couldn’t find any synonyms. You can add a synonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection
          title="Antonyms"
          addLabel="antonym"
          handleAdd={(value) =>
            handleAddVariant(value, 'antonyms', 'currentAntonymId')
          }
        >
          <VariantPicker
            variants={card.antonyms}
            selected={card.currentAntonymId}
            handleSelect={(id) => handleSelectVariant(id, 'currentAntonymId')}
            emptyText="We couldn’t find any antonyms. You can add an antonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection
          title="Hint"
          addLabel="hint"
          handleAdd={(value) =>
            handleAddVariant(value, 'hints', 'currentHintId')
          }
        >
          <VariantPicker
            variants={card.hints}
            selected={card.currentHintId}
            handleSelect={(id) => handleSelectVariant(id, 'currentHintId')}
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
export default ConfigureCard;
