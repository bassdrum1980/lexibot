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
  emptyText: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onCut: PropTypes.func.isRequired,
};

const defaultProps = {
  selected: null,
  emptyText: 'Looks like we couldn’t find anything...',
};

const ExamplePicker = ({ examples, selected, onSelect, onCut, emptyText }) => {
  let content;
  const handleKeyDown = (code, example) => {
    if (code === 'Enter' || code === 'NumpadEnter') {
      onSelect(example);
    }
  };

  if (examples.length > 0) {
    content = (
      <div className="example-picker">
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
            <p>{example}</p>
            {selected === example && (
              <Button
                size="s"
                btnStyle="secondary"
                width="hug"
                className={classnames('example-picker__example', {
                  'example-picker__example--selected': selected === example,
                })}
                onClick={() => onCut(example)}
              >
                cut
              </Button>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (examples.length === 0) {
    content = <p className="example-picker__empty-text">{emptyText}</p>;
  }

  return <div className="example-picker">{content}</div>;
};

ExamplePicker.displayName = 'Example Picker';
ExamplePicker.propTypes = propTypes;
ExamplePicker.defaultProps = defaultProps;

export default ExamplePicker;
