import { useEffect } from 'react';
import classnames from 'classnames';

import './index.scss';

type ModalProps = {
  children: React.ReactNode;
  className?: string | string[];
};

const Modal = ({ children, className }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <div
      className={classnames(
        'modal',
        Array.isArray(className) ? className.join(' ') : className
      )}
    >
      {children}
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
