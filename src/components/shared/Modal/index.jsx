import { useEffect } from 'react';

import './index.scss';

const Modal = ({
  children,
}) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <div className="modal">
      {children}
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
