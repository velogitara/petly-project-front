import React from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.styled';
import ClearInputSearchButton from 'components/ClearInputSearchButton';
import icons from '../../assets/icons/icons.svg';

const InputSearch = ({ onSubmit, onClick, query }) => {
  return (
    <InputContainer id="searchForm">
      <InputStyled placeholder="Search" type="text" name="search" />
      {query && (
        <ClearInputSearchButton onClick={e => onClick(e)} query={query}></ClearInputSearchButton>
      )}
      <BtnSearch title="Search" onClick={e => onSubmit(e)}>
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
