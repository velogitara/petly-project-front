import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { useState } from 'react';
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

  const label = 'Add pet';
  return (
    <>
      <AddButtonContainer user={user}>
        <AddButtonLabel user={user}>{label}</AddButtonLabel>
        <AddButton user={user} type="button" title={label} onClick={() => setShowModal(true)}>
          <AddButtonIcon user={user}>
            <use href={`${icons}#icon-plus`} />
          </AddButtonIcon>
          {!user && <AddButtonSpan>{label}</AddButtonSpan>}
        </AddButton>
      </AddButtonContainer>
      {showModal && <>{cloneElement(children, { onClose: () => setShowModal(false) })}</>}
    </>
  );
};

AddPetButton.propTypes = {
  user: PropTypes.bool,
  children: PropTypes.node,
};

export default AddPetButton;
