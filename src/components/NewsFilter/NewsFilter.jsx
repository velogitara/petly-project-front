import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';
import InputSearch from 'components/InputSearch';

const NewsFilter = ({onSubmit}) => {
  const dispatch = useDispatch();

  return <InputSearch onSubmit={onSubmit} onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))} />
}

export default NewsFilter;
