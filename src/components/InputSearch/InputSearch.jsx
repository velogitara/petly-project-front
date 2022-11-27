import React from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.styled';
import icons from '../../assets/icons/icons.svg';
import { useListNoticesByQueryMutation } from '../../redux/notices';

const InputSearch = ({ onSubmit }) => {
  // useListNoticesByQueryQuery();

  const handleSubmit = e => {
    e.preventDefault();

    console.log(e.currentTarget.parentElement.elements['search'].value);
  };

  return (
    <InputContainer id="searchForm">
      <InputStyled placeholder="Search" type="text" name="search" />
      <BtnSearch onClick={handleSubmit}>
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
