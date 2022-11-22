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
  variants: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  emptyTitle: PropTypes.string,
  emptyText: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

const defaultProps = {
  selected: null,
  emptyTitle: '',
  emptyText: 'Looks like we couldn’t find anything...',
};

const VariantPicker = ({
  variants,
  selected,
  onSelect,
  emptyTitle,
  emptyText,
}) => {
  let content;

  if (variants.length > 0) {
    content = (
      <ul>
        {variants.map((variant) => (
          <li key={variant}>
            <Button
              size="inline"
              btnStyle="plain"
              width="hug"
              className={classnames('variant-picker__variant', {
                'variant-picker__variant--selected': selected === variant,
              })}
              onClick={() => onSelect(variant)}
            >
              {variant}
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

VariantPicker.displayName = 'Variant Picker';
VariantPicker.propTypes = propTypes;
VariantPicker.defaultProps = defaultProps;

export default VariantPicker;
