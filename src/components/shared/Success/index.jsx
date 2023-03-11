/**
 * Component is shown when the user finishes a flow,
 * e.g. — creates new card, finishes a study session,
 * updates preferences...
 */

import './index.scss';

const Success = ({ children }) => <div className="success">{children}</div>;

Success.displayName = 'Success Dialog';

export default Success;
