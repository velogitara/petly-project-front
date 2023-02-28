import PropTypes from 'prop-types';
import { useState } from 'react';
import { InputStyled, BtnSearch, InputContainer } from './InputSearch.styled';
import ClearInputSearchButton from 'components/ClearInputSearchButton';
import { constants } from 'constants/constants';

const { icons } = constants;

const InputSearch = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value.trim());
  };

  const handleReset = () => {
    setValue('');
    onSubmit('');
  };

  return (
    <InputContainer>
      <InputStyled
        placeholder="Search"
        type="text"
        name="search"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      {value && <ClearInputSearchButton onClick={handleReset}></ClearInputSearchButton>}
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
};

export default InputSearch;
