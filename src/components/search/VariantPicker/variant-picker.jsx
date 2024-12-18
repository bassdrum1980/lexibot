/**
 * Component renders a list of values,
 * one of the values can be selected,
 * user can select any value.
 */

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button } from 'components';
import './index.scss';

const propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  selected: PropTypes.string,
  emptyTitle: PropTypes.string,
  emptyText: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
};

const defaultProps = {
  variants: [],
  selected: null,
  emptyTitle: '',
  emptyText: 'Looks like we couldn’t find anything...',
};

export const VariantPicker = ({
  variants,
  selected,
  handleSelect,
  emptyTitle,
  emptyText,
}) => {
  let content;

  if (variants.length > 0) {
    content = (
      <ul>
        {variants.map(({ value, id }) => (
          <li key={id}>
            <Button
              size="inline"
              btnStyle="pseudo"
              width="hug"
              className={classnames('variant-picker__variant', {
                'variant-picker__variant--selected': selected === id,
              })}
              onClick={() => handleSelect(id)}
            >
              {value}
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  if (variants.length === 0) {
    content = (
      <>
        {emptyTitle && (
          <h3 className="variant-picker__empty-title">{emptyTitle}</h3>
        )}
        <p className="variant-picker__empty-text">{emptyText}</p>
      </>
    );
  }

  return <div className="variant-picker">{content}</div>;
};

VariantPicker.propTypes = propTypes;
VariantPicker.defaultProps = defaultProps;
