import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
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

const AddPetButton = ({ user, userId = '', children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showNotLogged, setShowNotLogged] = useState(false);

  const authId = useSelector(selectAuthId);
  // const authId = '637021587475d007fb85d3d4';

  const label = 'Add pet';

  return (
    <>
      <AddButtonContainer user={user}>
        <AddButtonLabel user={user}>{label}</AddButtonLabel>
        <AddButton
          user={user}
          type="button"
          title={label}
          onClick={!authId ? () => setShowNotLogged(true) : () => setShowModal(true)}
        >
          <AddButtonIcon user={user}>
            <use href={`${icons}#icon-plus`} />
          </AddButtonIcon>
          {!user && <AddButtonSpan>{label}</AddButtonSpan>}
        </AddButton>
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
  userId: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AddPetButton;
