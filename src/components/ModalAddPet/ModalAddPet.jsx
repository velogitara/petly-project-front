import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ModalCloseButton from 'components/ModalCloseButton';
import FormAddPet from 'components/FormAddPet';
import { Modal, Overlay } from './ModalAddPet.styled';

const modalRoot = document.querySelector('#modal-root');

function ModalAddPet({ onClose }) {
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
        <ModalCloseButton styled="big" onClose={onClose} />
        <FormAddPet onClose={onClose} />
      </Modal>
    </Overlay>,
    modalRoot
  );
}
export default ModalAddPet;
