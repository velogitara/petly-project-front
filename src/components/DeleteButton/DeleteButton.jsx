import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
import PopUp from 'components/PopUp';
import ConfirmButtons from 'components/ConfirmButtons';
import { DelButtonContainer, DelButton, DelIcon } from './DeleteButton.styled';
import { ownerCheck } from 'helpers';
import { constants } from 'constants/constants';

const { icons } = constants;

const DeleteButton = ({ translucent = false, onRemove, owner }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const authId = useSelector(selectAuthId);
  // const authId = '637021587475d007fb85d3d4';

  const removeItem = () => {
    onRemove();
    setShowDeleteConfirm(false);
  };
  if (!authId || !ownerCheck({ userId: authId, owner })) {
    return <></>;
  }

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
  owner: PropTypes.string.isRequired,
};

export default DeleteButton;
