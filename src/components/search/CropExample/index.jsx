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
      active: true,
      id: nanoid(),
    }))
  );

  const toggleToken = (id) => {
    const nextTokens = [...tokens];
    const current = nextTokens.find((token) => token.id === id);
    current.active = !current.active;
    setTokens(nextTokens);
  };

  const handleSubmit = () => {
    handleCut(tokens.reduce((cropped, token) => cropped + token.token, ''));
  };

  return (
    <div className="crop-example">
      <div className="crop-example__content">
        <div className="crop-example__sentence">
          {tokens.map(({ token, id, active }) => (
            <Button
              type="button"
              btnStyle="pseudo"
              width="hug"
              size="inline"
              onClick={() => toggleToken(id)}
              className={classnames('crop-example__token', {
                'crop-example__token--active': !active,
              })}
            >
              {token}
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
