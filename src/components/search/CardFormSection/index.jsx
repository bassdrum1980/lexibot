/**
 * Component renders a section,
 * namely — title and 'add on more' action.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';

import IconPlus from 'svg/IconPlus/IconPlus';

import { Modal, AddVariant, Backdrop } from 'components';
import './index.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  addLabel: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

const CardFormSection = ({ title, addLabel, handleAdd, children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card-form-section">
      <div className="card-form-section__title">
        <h2>{title}</h2>
        <button
          className="card-form-section__action"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <IconPlus />
        </button>
      </div>
      {children}
      {showModal && (
        <Modal>
          <Backdrop />
          <AddVariant
            label={addLabel}
            onAdd={(variant) => {
              handleAdd(variant);
              setShowModal(false);
            }}
            onCancel={() => setShowModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

CardFormSection.displayName = 'Card Form Section';
CardFormSection.propTypes = propTypes;

export default CardFormSection;
