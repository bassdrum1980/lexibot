import { useEffect } from 'react';
import './index.scss';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return <div className="modal">{children}</div>;
};

Modal.displayName = 'Modal';

export default Modal;
