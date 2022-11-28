import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import PopUp from 'components/PopUp';
import {
  AddButtonContainer,
  AddButtonLabel,
  AddButton,
  AddButtonIcon,
  AddButtonSpan,
} from './AddPetButton.styled';
import { constants } from 'constants/constants';

const { icons } = constants;

const AddPetButton = ({ user, children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showNotLogged, setShowNotLogged] = useState(false);

  const isLogged = useSelector(selectAuthToken);

  const label = 'Add pet';

  return (
    <>
      <AddButtonContainer user={user}>
        <AddButton
          user={user}
          type="button"
          title={label}
          onClick={!isLogged ? () => setShowNotLogged(true) : () => setShowModal(true)}
        >
          <AddButtonIcon user={user}>
            <use href={`${icons}#icon-plus`} />
          </AddButtonIcon>
          {!user && <AddButtonSpan>{label}</AddButtonSpan>}
        </AddButton>
        <AddButtonLabel user={user}>{label}</AddButtonLabel>
        {showNotLogged && (
          <PopUp message="Please, log in." onClose={() => setShowNotLogged(false)} />
        )}
      </AddButtonContainer>
      {showModal && !showNotLogged && (
        <>{cloneElement(children, { onClose: () => setShowModal(false) })}</>
      )}
    </>
  );
};

AddPetButton.propTypes = {
  user: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default AddPetButton;
