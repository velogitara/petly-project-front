import React from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.module';
import icons from '../../assets/icons/icons.svg';

const InputSearch = () => {
  return (
    <InputContainer>
      <InputStyled placeholder="Search" type="text" />
      <BtnSearch>
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
