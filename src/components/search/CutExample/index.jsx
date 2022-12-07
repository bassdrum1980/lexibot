/**
 * Component renders card's header
 * used in 'ConfigureCard' and 'EditCard' features.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { FormGroup, Textarea, Button, Controls } from 'components';
import './index.scss';

const propTypes = {
  example: PropTypes.string,
  handleCut: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  example: '',
};

const CutExample = ({ example, handleCut, handleCancel }) => {
  const [tokens, setTokens] = useState(
    example.split(' ').map((token) => ({
      token,
      selected: true,
      id: nanoid(),
    }))
  );

  const toggleToken = (id) => {
    const nextTokens = [...tokens];
    const current = nextTokens.find((token) => token.id === id);
    current.selected = !current.selected;
    setTokens(nextTokens);
  };

  return (
    <div className="cut-example">
      <div className="cut-example__content">{example.value}</div>
      <div className="cut-example__footer">
        <Controls className="controls--plain">
          <Button
            type="button"
            btnStyle="tertiary"
            width="fill"
            onClick={() =>
              handleCut(
                tokens.reduce((cropped, token) => cropped + token.token, '')
              )
            }
          >
            Add
          </Button>
          <Button
            type="button"
            btnStyle="link"
            width="fill"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Controls>
      </div>
    </div>
  );
};

CutExample.displayName = 'Cut Example Dialog';
CutExample.propTypes = propTypes;
CutExample.defaultProps = defaultProps;

export default CutExample;
