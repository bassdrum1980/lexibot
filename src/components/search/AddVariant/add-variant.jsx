/**
 * Component renders card's header
 * used in 'ConfigureCard' and 'EditCard' features.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';

import { FormGroup, Textarea, Button, Controls } from 'components';
import './index.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export const AddVariant = ({ label, onAdd, onCancel }) => {
  const [variant, setVariant] = useState('');

  const handleInput = ({ target }) => {
    setVariant(target.value);
  };

  const handleAdd = () => {
    if (variant.length > 0) onAdd(variant);
  };

  return (
    <div className="add-variant">
      <div className="add-variant__content">
        <FormGroup label={label}>
          <Textarea
            value={variant}
            onInput={handleInput}
          />
        </FormGroup>
      </div>
      <div className="add-variant__footer">
        <Controls className="controls--plain">
          <Button
            type="button"
            btnStyle="tertiary"
            width="fill"
            onClick={handleAdd}
          >
            Add
          </Button>
          <Button
            type="button"
            btnStyle="plain"
            width="fill"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Controls>
      </div>
    </div>
  );
};

AddVariant.propTypes = propTypes;
