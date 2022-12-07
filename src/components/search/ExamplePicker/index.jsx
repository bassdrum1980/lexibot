/**
 * Component renders a list of 'examples' (sentences),
 * one of the examples can be selected,
 * user can select any examples,
 * user can click 'cut' on selected example,
 * 'cut' opens UI that allows editing the example
 */

import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useState } from 'react';

import { Button, Backdrop, Modal } from 'components';
import './index.scss';

const propTypes = {
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  selected: PropTypes.string,
  emptyTitle: PropTypes.string,
  emptyText: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
  handleCut: PropTypes.func.isRequired,
};

const defaultProps = {
  selected: null,
  emptyTitle: '',
  emptyText: 'Looks like we couldn’t find anything...',
};

const ExamplePicker = ({
  examples,
  selected,
  handleSelect,
  handleCut,
  emptyTitle,
  emptyText,
}) => {
  let content;
  const [showModal, setShowModal] = useState(false);

  const handleKeyDown = (code, id) => {
    if (code === 'Enter' || code === 'NumpadEnter') {
      handleSelect(id);
    }
  };

  if (examples.length > 0) {
    content = (
      <>
        {examples.map(({ value, id }) => (
          <div
            key={id}
            className={classnames('example-picker__example', {
              'example-picker__example--selected': selected === id,
            })}
            role="button"
            tabIndex="0"
            onClick={() => handleSelect(id)}
            onKeyDown={({ code }) => {
              handleKeyDown(code, id);
            }}
          >
            <p className="example-picker__text">{value}</p>
            {selected === id && (
              <div className="example-picker__cut-wrapper">
                <Button
                  size="s"
                  btnStyle="tertiary"
                  width="hug"
                  className="example-picker__cut-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                  }}
                >
                  cut
                </Button>
              </div>
            )}
          </div>
        ))}
      </>
    );
  }

  if (examples.length === 0) {
    content = (
      <>
        {emptyTitle && (
          <h3 className="variant-picker__empty-title">{emptyTitle}</h3>
        )}
        <p className="variant-picker__empty-text">{emptyText}</p>
      </>
    );
  }

  return (
    <div className="example-picker">
      {content}
      {showModal && (
        <Modal>
          <Backdrop />
          <CutExample
            example={examples.find((item) => item.id === selected)?.value}
            handleCut={(cropped) => {
              handleCut(selected, cropped);
            }}
            handleCancel={() => console.log('cancel')}
          />
        </Modal>
      )}
    </div>
  );
};

ExamplePicker.displayName = 'Example Picker';
ExamplePicker.propTypes = propTypes;
ExamplePicker.defaultProps = defaultProps;

export default ExamplePicker;
