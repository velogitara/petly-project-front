import React from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.styled';
import icons from '../../assets/icons/icons.svg';

const InputSearch = ({ onSubmit }) => {
  return (
    <InputContainer id="searchForm">
      <InputStyled placeholder="Search" type="text" name="search" />
      <BtnSearch onClick={(e) => onSubmit(e)} >
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
