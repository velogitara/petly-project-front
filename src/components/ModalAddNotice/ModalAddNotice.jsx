import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import FormAddNotice from '../FormAddNotice/FormAddNotice';
import { Modal } from '../ModalAddNotice/ModalAddNotice.styled';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';
// import StepFirst from '../StepFirst/StepFirst';
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
      <Modal>
        <ModalCloseButton onClose={onClose} />
        <FormAddNotice onClose={onClose} />
      </Modal>
    </Overlay>,
    modalRoot
  );
}
export default ModalAddNotice;
