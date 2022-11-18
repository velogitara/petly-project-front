import React from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.styled';
import icons from '../../assets/icons/icons.svg';

const InputSearch = ({ onChange, value, onSubmit }) => {
  return (
    <InputContainer>
      <InputStyled name="query" onChange={onChange} placeholder="Search" type="text" />
      <BtnSearch onClick={(e) => onSubmit(e, value)} >
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
