/**
 * Component, crops an example,
 * examples are often verbose, hence the need in cropping feature.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import classnames from 'classnames';

import { Button, Controls } from 'components';
import './index.scss';

const propTypes = {
  example: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ),
  handleCrop: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  example: '',
};

const CropExample = ({ example, handleCrop, handleCancel }) => {
  const [tokens, setTokens] = useState(example);

  const toggleToken = (id) =>
    setTokens(
      tokens.map((token) => {
        if (token.id !== id) return token;
        return {
          ...token,
          isActive: !token.isActive,
        };
      })
    );

  const handleSubmit = () => {
    handleCrop(tokens);
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
