import PropTypes from 'prop-types';
import { useRef } from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.styled';
import ClearInputSearchButton from 'components/ClearInputSearchButton';
import { constants } from 'constants/constants';

const { icons } = constants;

const InputSearch = ({ onSubmit, query }) => {
  const searchInputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const searchedValue = e.currentTarget.parentElement.elements['search'].value.trim();
    onSubmit(searchedValue);
  };

  const inputReset = () => {
    if (query !== '') {
      searchInputRef.current.reset();
      onSubmit('');
    }
  };

  return (
    <InputContainer ref={searchInputRef}>
      <InputStyled placeholder="Search" type="text" name="search" />
      {query && (
        <ClearInputSearchButton onClick={inputReset} query={query}></ClearInputSearchButton>
      )}
      <BtnSearch title="Search" onClick={handleSubmit}>
        <svg width={17.5} height={17.5}>
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </BtnSearch>
    </InputContainer>
  );
};

InputSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default InputSearch;
