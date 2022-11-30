/**
 * Component renders a list of 'examples' (sentences),
 * one of the examples can be selected,
 * user can select any examples,
 * user can click 'cut' on selected example,
 * 'cut' opens UI that allows editing the example
 */

import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Button } from 'components';
import './index.scss';

const propTypes = {
  examples: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  emptyTitle: PropTypes.string,
  emptyText: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onCut: PropTypes.func.isRequired,
};

const defaultProps = {
  selected: null,
  emptyTitle: '',
  emptyText: 'Looks like we couldn’t find anything...',
};

const ExamplePicker = ({
  examples,
  selected,
  onSelect,
  onCut,
  emptyTitle,
  emptyText,
}) => {
  let content;
  const handleKeyDown = (code, example) => {
    if (code === 'Enter' || code === 'NumpadEnter') {
      onSelect(example);
    }
  };

  if (examples.length > 0) {
    content = (
      <>
        {examples.map((example) => (
          <div
            key={example}
            className={classnames('example-picker__example', {
              'example-picker__example--selected': selected === example,
            })}
            role="button"
            tabIndex="0"
            onClick={() => onSelect(example)}
            onKeyDown={({ code }) => {
              handleKeyDown(code, example);
            }}
          >
            <p className="example-picker__text">{example}</p>
            {selected === example && (
              <div className="example-picker__cut-wrapper">
                <Button
                  size="s"
                  btnStyle="tertiary"
                  width="hug"
                  className="example-picker__cut-button"
                  onClick={() => onCut(example)}
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

  return <div className="example-picker">{content}</div>;
};

ExamplePicker.displayName = 'Example Picker';
ExamplePicker.propTypes = propTypes;
ExamplePicker.defaultProps = defaultProps;

export default ExamplePicker;
