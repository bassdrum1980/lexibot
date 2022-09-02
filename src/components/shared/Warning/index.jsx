/**
 * Shows system messages
 * (errors, warnings, info)
 * 
 * Adds modal-open on body on mount,
 * removes on unmount.
*/

import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Button } from 'components';
import './index.scss';

const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string,
  message: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  title: '',
  message: '',
  className: '',
};

const Warning = ({
  className,
  title,
  message,
  onClick,
  ...rest
}) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <div
      className={classnames(
        'warning',
        Array.isArray(className) ? className.join(' ') : className,
      )}
      {...rest}
    >
      <div className="warning__content">
        <div className="warning__content__wrapper">
          {title && <h2>{title}</h2>}
          {message && <p>{message}</p>}
        </div>
      </div>
      <div className="warning__footer">
        <Button
          type="button"
          btnStyle="tertiary"
          width="hug"
          onClick={onClick}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

Warning.displayName = 'Warning';
Warning.propTypes = propTypes;
Warning.defaultProps = defaultProps;

export default Warning;
