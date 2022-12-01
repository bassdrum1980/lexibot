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
    hints: [],
    currentSynonym: null,
    currentAntonym: null,
    currentExample: definitionData.examples[0] || null,
    currentHint: null,
  });

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
          onAddVariant={(variant) =>
            setCard({
              ...card,
              examples: [...card.examples, variant],
              currentExample: variant,
            })
          }
        >
          <ExamplePicker
            examples={card.examples}
            selected={card.currentExample}
            onSelect={(example) =>
              setCard({
                ...card,
                currentExample:
                  card.currentExample === example ? null : example,
              })
            }
            onCut={(example) => console.log(example)}
            emptyText="No available examples, bummer. Add your own example."
          />
        </CardFormSection>
        <CardFormSection
          title="Synonyms"
          addLabel="sunonym"
          onAddVariant={() => null}
        >
          <VariantPicker
            variants={card.synonyms}
            selected={card.currentSynonym}
            onSelect={(synonym) =>
              setCard({
                ...card,
                currentSynonym:
                  card.currentSynonym === synonym ? null : synonym,
              })
            }
            emptyText="We couldn’t find any synonyms. You can add a synonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection
          title="Antonyms"
          addLabel="antonym"
          onAddVariant={() => null}
        >
          <VariantPicker
            variants={card.antonyms}
            selected={card.currentAntonym}
            onSelect={(antonym) =>
              setCard({
                ...card,
                currentAntonym:
                  card.currentAntonym === antonym ? null : antonym,
              })
            }
            emptyText="We couldn’t find any antonyms. You can add an antonym on your own or continue as is."
          />
        </CardFormSection>
        <CardFormSection title="Hint" addLabel="hint" onAddVariant={() => null}>
          <VariantPicker
            variants={card.hints}
            selected={card.currentHint}
            onSelect={(hint) =>
              setCard({
                ...card,
                currentHint: card.currentHint === hint ? null : hint,
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
