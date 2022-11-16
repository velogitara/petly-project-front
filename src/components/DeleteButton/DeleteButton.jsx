import PropTypes from 'prop-types';
import { useState } from 'react';
import PopUp from 'components/PopUp';
import ConfirmButtons from 'components/ConfirmButtons';
import { DelButtonContainer, DelButton, DelIcon } from './DeleteButton.styled';
import { constants } from 'constants/constants';

const { icons } = constants;

const DeleteButton = ({ translucent = false, onRemove }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const removeItem = () => {
    onRemove();
    setShowDeleteConfirm(false);
  };
  return (
    <DelButtonContainer>
      <DelButton
        type="button"
        translucent={translucent}
        title="Remove"
        onClick={() => setShowDeleteConfirm(true)}
      >
        <DelIcon aria-label="Delete icon">
          <use href={`${icons}#icon-trashcan`} />
        </DelIcon>
      </DelButton>
      {showDeleteConfirm && (
        <PopUp message="Are you sure?" onClose={() => setShowDeleteConfirm(false)}>
          <ConfirmButtons
            onClickYes={() => removeItem()}
            onClickNo={() => setShowDeleteConfirm(false)}
          />
        </PopUp>
      )}
    </DelButtonContainer>
  );
};

DeleteButton.propTypes = {
  translucent: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default DeleteButton;
