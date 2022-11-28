import React from 'react';
import { InputStyled, BtnSearch, InputContainer, ClearButton, ClearIcon} from './InputSearch.styled';
import icons from '../../assets/icons/icons.svg';

const InputSearch = ({ onSubmit, onClick }) => {
  return (
    <InputContainer id="searchForm">
      <InputStyled placeholder="Search" type="text" name="search" />
      <ClearButton type="button" title="Clear" onClick={e => onClick(e)}>
        <ClearIcon aria-label="Close icon">
          <use href={`${icons}#icon-close`} />
        </ClearIcon>
      </ClearButton>
      <BtnSearch title="Search" onClick={(e) => onSubmit(e)} >
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;