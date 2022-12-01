/**
 * Component renders a section,
 * namely — title and 'add on more' action.
 */

import PropTypes from 'prop-types';
import { useState } from 'react';

import { Icon, Modal, AddVariant, Backdrop } from 'components';
import './index.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  addLabel: PropTypes.string.isRequired,
  onAddVariant: PropTypes.func.isRequired,
};

const CardFormSection = ({ title, addLabel, onAddVariant, children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (variant) => {
    onAddVariant(variant);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="card-form-section">
      <div className="card-form-section__title">
        <h2>{title}</h2>
        <button
          className="card-form-section__action"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <Icon name="plus" size={32} />
        </button>
      </div>
      {children}
      {showModal && (
        <Modal>
          <Backdrop />
          <AddVariant
            label={addLabel}
            onAdd={handleAdd}
            onCancel={handleCancel}
          />
        </Modal>
      )}
    </div>
  );
};

CardFormSection.displayName = 'Card Form Section';
CardFormSection.propTypes = propTypes;

export default CardFormSection;