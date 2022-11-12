import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Filter';
import InputSearch from 'components/InputSearch';

const NewsFilter = () => {
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return <InputSearch value={filterValue} onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))} />  
}

export default NewsFilter;
