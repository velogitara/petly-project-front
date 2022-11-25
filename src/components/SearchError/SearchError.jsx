import PropTypes from 'prop-types';
import { SearchErrorMessage } from './SearchError.styled';

const SearchError = ({query}) => {
  return <SearchErrorMessage>No matches found for "{query}"</SearchErrorMessage>
}

export default SearchError;

SearchError.propTypes = {
  query: PropTypes.string.isRequired
}
