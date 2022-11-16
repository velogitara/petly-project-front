import PropTypes from 'prop-types';
import { ConfirmButtonsContainer, ConfirmButton } from './ConfirmButtons.styled';

const ConfirmButtons = ({ onClickYes, onClickNo }) => {
  return (
    <ConfirmButtonsContainer>
      <ConfirmButton type="button" title="Confirm" onClick={onClickYes}>
        Yes
      </ConfirmButton>
      <ConfirmButton type="button" title="Deny" onClick={onClickNo}>
        No
      </ConfirmButton>
    </ConfirmButtonsContainer>
  );
};

ConfirmButtons.propTypes = {
  onClickYes: PropTypes.func.isRequired,
  onClickNo: PropTypes.func.isRequired,
};

export default ConfirmButtons;
