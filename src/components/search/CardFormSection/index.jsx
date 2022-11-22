/**
 * Component renders a section,
 * namely — title and 'add on more' action.
 */

import PropTypes from 'prop-types';

import { Icon } from 'components';
import './index.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const CardFormSection = ({
  title,
  onClick,
  children,
}) => (
  <div className="card-form-section">
    <div className="card-form-section__title">
      <h2>{title}</h2>
      <button
        className="card-form-section__action"
        type="button"
        onClick={onClick}
      >
        <Icon
          name="plus"
          size={32}
        />
      </button>
    </div>
    {children}
  </div>
);

CardFormSection.displayName = 'Card Form Section';
CardFormSection.propTypes = propTypes;

export default CardFormSection;
