import PropTypes from 'prop-types';
import { constants } from 'constants/constants';

import { PopUpContainer, Message, CloseButton, CloseIcon } from './PopUp.styled';

const { icons } = constants;

const PopUp = ({ message = '', onClose, children }) => {
  return (
    <PopUpContainer>
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
