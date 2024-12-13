import { useEffect } from 'react';
import classnames from 'classnames';

import './index.scss';

type ModalProps = {
  children: React.ReactNode;
  className?: string | string[];
};

export const Modal = ({ children, className }: ModalProps) => {
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
