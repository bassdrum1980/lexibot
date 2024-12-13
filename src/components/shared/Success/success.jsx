/**
 * Component is shown when the user finishes a flow,
 * e.g. — creates new card, finishes a study session,
 * updates preferences...
 */

import { Button, Alert } from 'components';
import './index.scss';

export const Success = ({
  primaryText,
  secondaryText,
  handleClose,
  children,
}) => (
  <div className="success">
    <div className="success__header">
      <Alert
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
    </div>
    <div className="success__body">
      <div className="success__body__content">{children}</div>
      <div className="success__body__footer">
        <Button
          type="button"
          btnStyle="tertiary"
          width="hug"
          onClick={handleClose}
        >
          Close
        </Button>
      </div>
    </div>
  </div>
);
