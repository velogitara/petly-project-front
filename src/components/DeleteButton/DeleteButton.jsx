import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthId, selectAuthToken } from 'redux/authState';
import { useRemoveNoticeMutation } from 'redux/notices';
import { useRemovePetMutation } from 'redux/user';
import PopUp from 'components/PopUp';
import ConfirmButtons from 'components/ConfirmButtons';
import { DelButtonContainer, DelButton, DelIcon } from './DeleteButton.styled';
import { ownerCheck } from 'helpers';
import { constants } from 'constants/constants';
import { toast } from 'react-toastify';

const { icons } = constants;

const DeleteButton = ({ translucent = false, petId, noticeId, owner, className = '' }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [removeNotice] = useRemoveNoticeMutation();
  const [removePet] = useRemovePetMutation();

  const isLogged = useSelector(selectAuthToken);
  const authId = useSelector(selectAuthId);

  const check = ownerCheck({ userId: isLogged && authId ? authId : null, owner });

  const removeItem = async ({ noticeId, petId }) => {
    if (noticeId && check) {
      try {
        await removeNotice({ noticeId }).then(response => {
          if (response.error) {
            toast.error(response.error.data.message);
          }
          if (response.data) {
            toast.success(response?.data?.message ?? 'Success');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (petId && check) {
      try {
        await removePet({ petId }).then(response => {
          if (response.error) {
            toast.error(response.error.data.message);
          }
          if (response.data) {
            toast.success(response?.data?.message ?? 'Success');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    setShowDeleteConfirm(false);
  };
  if (!isLogged || !check) {
    return null;
  }

  return (
    <DelButtonContainer className={className}>
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
            onClickYes={() => removeItem({ noticeId, petId })}
            onClickNo={() => setShowDeleteConfirm(false)}
          />
        </PopUp>
      )}
    </DelButtonContainer>
  );
};

DeleteButton.propTypes = {
  translucent: PropTypes.bool,
  owner: PropTypes.string.isRequired,
  noticeId: PropTypes.string,
  petId: PropTypes.string,
};

export default DeleteButton;
