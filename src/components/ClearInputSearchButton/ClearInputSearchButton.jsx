import React from 'react';
import { ClearButton, ClearIcon } from './ClearInputSearchButton.styled';
import icons from '../../assets/icons/icons.svg';

const ClearInputSearchButton = ({ onClick }) => {
  return (
    <ClearButton type="button" title="Clear" onClick={onClick}>
      <ClearIcon aria-label="Close icon">
        <use href={`${icons}#icon-close`} />
      </ClearIcon>
    </ClearButton>
  );
};

export default ClearInputSearchButton;
