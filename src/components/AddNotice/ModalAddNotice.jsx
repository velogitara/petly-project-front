import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import ModalCloseButton from 'components/ModalCloseButton';
import FormAddNotice from './FormAddNotice';
import { Modal, Overlay } from '../ModalAddNotice/ModalAddNotice.styled';

const modalRoot = document.querySelector('#modal-root');

function ModalAddNotice({ onClose, addNotice }) {
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
        <FormAddNotice onClose={onClose} addNotice={addNotice} />
      </Modal>
    </Overlay>,
    modalRoot
  );
}
export default ModalAddNotice;

ModalAddNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  addNotice: PropTypes.func.isRequired,
};
