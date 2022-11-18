import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
import { useRemoveNoticeMutation } from 'redux/notices';
import PopUp from 'components/PopUp';
import ConfirmButtons from 'components/ConfirmButtons';
import { DelButtonContainer, DelButton, DelIcon } from './DeleteButton.styled';
import { ownerCheck } from 'helpers';
import { constants } from 'constants/constants';
import { toast } from 'react-toastify';

const { icons } = constants;

const DeleteButton = ({ translucent = false, petId, noticeId, owner }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [removeNotice, { isSuccess }] = useRemoveNoticeMutation();

  const authId = useSelector(selectAuthId);
  // const authId = '637021587475d007fb85d3d4';

  const check = ownerCheck({ userId: authId, owner });

  const removeItem = async ({ noticeId, petId }) => {
    if (noticeId && check) {
      try {
        await removeNotice({ noticeId }).then(response => {
          if (response.status !== 200) {
            toast.error(response.error.data.message);
          }
          if (isSuccess) {
            toast.success(response?.body?.message);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    if (petId && check) {
      console.log(petId);
    }
    setShowDeleteConfirm(false);
  };
  if (!authId || !check) {
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
