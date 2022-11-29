import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { constants } from 'constants/constants';

import { PopUpContainer, Message, CloseButton, CloseIcon } from './PopUp.styled';

const { icons } = constants;

const PopUp = ({ message = '', onClose, children, className = '' }) => {
  useEffect(() => {
    const handleEscKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);
  return (
    <PopUpContainer className={className}>
      <CloseButton type="button" title="Close" onClick={onClose}>
        <CloseIcon aria-label="Close icon">
          <use href={`${icons}#icon-close`} />
        </CloseIcon>
      </CloseButton>
      <Message>{message}</Message>
      {children}
    </PopUpContainer>
  );
};

PopUp.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default PopUp;
