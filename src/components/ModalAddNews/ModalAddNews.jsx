import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

import ModalCloseButton from 'components/ModalCloseButton';
import FormAddNews from 'components/FormAddNews/FormAddNews';
import { Modal, Overlay } from './ModalAddNews.styled';

const modalRoot = document.querySelector('#modal-root');

function ModalAddNews({ onClose }) {
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
        <FormAddNews onClose={onClose} />
      </Modal>
    </Overlay>,
    modalRoot
  );
}
export default ModalAddNews;