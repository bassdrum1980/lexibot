/**
 * Component allow to crop an example,
 * examples are often verbose, hence the need in cropping feature.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import classnames from 'classnames';

import { Button, Controls } from 'components';
import './index.scss';

const propTypes = {
  example: PropTypes.string,
  handleCrop: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  example: '',
};

const CropExample = ({ example, handleCrop, handleCancel }) => {
  const [tokens, setTokens] = useState(
    example.split(' ').map((token) => ({
      value: token,
      isActive: true,
      id: nanoid(),
    }))
  );

  const toggleToken = (id) => {
    const nextTokens = [...tokens];
    const current = nextTokens.find((token) => token.id === id);
    current.isActive = !current.isActive;
    setTokens(nextTokens);
  };

  const handleSubmit = () => {
    const values = tokens
      .filter(({ isActive }) => isActive)
      .map(({ value }) => value);

    handleCrop(values.join(' '));
  };

  return (
    <div className="crop-example">
      <div className="crop-example__content">
        <div className="crop-example__sentence">
          {tokens.map(({ value, id, isActive }) => (
            <Button
              key={id}
              type="button"
              btnStyle="pseudo"
              width="hug"
              size="inline"
              onClick={() => toggleToken(id)}
              className={classnames('crop-example__token', {
                'crop-example__token--active': !isActive,
              })}
            >
              {value}
            </Button>
          ))}
        </div>
        <p className="crop-example__hint">touch to toggle</p>
      </div>
      <div className="crop-example__footer">
        <Controls className="controls--plain">
          <Button
            type="button"
            btnStyle="tertiary"
            width="fill"
            onClick={handleSubmit}
          >
            Crop
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
