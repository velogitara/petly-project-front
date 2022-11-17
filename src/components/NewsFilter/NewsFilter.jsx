import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';
import InputSearch from 'components/InputSearch';

const NewsFilter = () => {
  const dispatch = useDispatch();

  return <InputSearch onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))} />
}

export default NewsFilter;
