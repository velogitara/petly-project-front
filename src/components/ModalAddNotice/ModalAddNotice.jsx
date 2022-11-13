import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FormAddNotice from '../FormAddNotice/FormAddNotice';
import { Overlay } from './ModalAddNotice.styled';

const modalRoot = document.querySelector('#modal-root');

function ModalAddNotice({ onClose }) {
  useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <FormAddNotice onClose={onClose} />
    </Overlay>,
    modalRoot
  );
}
export default ModalAddNotice;
