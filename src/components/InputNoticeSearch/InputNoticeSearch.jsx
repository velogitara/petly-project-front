import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import { InputStyled, BtnSearch, InputContainer } from './InputNoticeSearch.styled';
import icons from '../../assets/icons/icons.svg';
import { useListNoticesByQueryQuery } from '../../redux/notices';

const InputSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  // const [error, setError] = useState(null);

  const location = useLocation();
  const category = location.pathname.slice(9);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const { data, isLoading } = useListNoticesByQueryQuery({ category, query });

  const input = useRef(0);
  useEffect(() => {
    if (search === '') {
      return;
    }
    input.current.value = search;

    return () => {};
  }, [search]);

  const updateSearchParams = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log(form);
    console.log(search);
    console.log(category);
    console.log(data);
    console.log(isLoading);
    // console.log(input.current.value);
    setQuery(search);
    updateSearchParams(form.search.value);
  };

  return (
    <InputContainer id="searchForm" onSubmit={handleSubmit}>
      <InputStyled placeholder="Search" type="text" name="search" ref={input} />
      <BtnSearch type="submit">
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

export default InputSearch;
