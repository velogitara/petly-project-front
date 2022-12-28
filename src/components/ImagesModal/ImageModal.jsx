import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';
import ModalCloseButton from 'components/ModalCloseButton';
import { Overlay, Modal, ItemImage } from './ImageModal.styled';
import { constants } from 'constants/constants';

const modalRoot = document.querySelector('#modal-root');

function ImageModal({ onClose, image }) {
  const { noImage } = constants;

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
        <ModalCloseButton styled="imageModal" onClose={onClose} />
        <picture>
          <source
            srcSet={`${image ? image?.mobile : noImage.mobile} 280w, ${
              image ? image?.mobile_retina : noImage.mobileRetina
            } 560w`}
            media="(max-width: 767px)"
            sizes="280px"
          />
          <source
            srcSet={`${image ? image?.tablet : noImage.tablet} 336w, ${
              image ? image?.tablet_retina : noImage.tabletRetina.replace('%40', '@')
            } 672w`}
            media="(min-width: 768px)"
            sizes="672px"
          />
          <ItemImage src={image ? image?.tablet : noImage.tablet} loading="lazy" />
        </picture>
      </Modal>
    </Overlay>,
    modalRoot
  );
}

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
