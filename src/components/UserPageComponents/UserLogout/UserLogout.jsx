import { LogoutButton, SvgIcon, LogoutText, Container } from './UserLogout.styled';
import icons from '../../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
import { toast } from 'react-toastify';
import { DelButtonContainer } from 'components/DeleteButton/DeleteButton.styled';
import PopUp from 'components/PopUp';
import ConfirmButtons from 'components/ConfirmButtons';

import { useSignOutMutation } from '../../../redux/authState/authSlice';
import { useState } from 'react';

const UserCard = () => {
  const authId = useSelector(selectAuthId);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [logout] = useSignOutMutation(authId);

  const logoutUser = async () => {
    try {
      await logout().then(response => {
        if (response.error) {
          toast.error(response.error.data.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
    setShowDeleteConfirm(false);
  };

  return (
    <Container>
      <LogoutButton type="button" onClick={() => setShowDeleteConfirm(true)}>
        <SvgIcon>
          <use href={`${icons}#icon-logout`}></use>
        </SvgIcon>
        <LogoutText>Log Out</LogoutText>
      </LogoutButton>
      {showDeleteConfirm && (
        <PopUp className="user" message="Are you sure?" onClose={() => setShowDeleteConfirm(false)}>
          <ConfirmButtons
            onClickYes={() => logoutUser()}
            onClickNo={() => setShowDeleteConfirm(false)}
          />
        </PopUp>
      )}
    </Container>
  );
};

export default UserCard;
