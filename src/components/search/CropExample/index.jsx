/**
 * Component allow to crop an example,
 * examples are often verbose, hence the need in cropping feature.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { Button, Controls } from 'components';
import './index.scss';

const propTypes = {
  example: PropTypes.string,
  handleCut: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  example: '',
};

const CropExample = ({ example, handleCut, handleCancel }) => {
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

  const handleSubmit = () => {
    handleCut(tokens.reduce((cropped, token) => cropped + token.token, ''));
  };

  return (
    <div className="cut-example">
      <div className="cut-example__content">
        {tokens.map(({ token, id, selected }) => {
          if (selected) return <span>{token}</span>;

          return (
            <Button
              type="button"
              btnStyle="link"
              width="hug"
              onClick={() => toggleToken(id)}
            >
              {token}
            </Button>
          );
        })}
      </div>
      <div className="cut-example__footer">
        <Controls className="controls--plain">
          <Button
            type="button"
            btnStyle="tertiary"
            width="fill"
            onClick={handleSubmit}
          >
            Add
          </Button>
          <Button
            type="button"
            btnStyle="plain"
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

CropExample.displayName = 'Crop Example Dialog';
CropExample.propTypes = propTypes;
CropExample.defaultProps = defaultProps;

export default CropExample;
