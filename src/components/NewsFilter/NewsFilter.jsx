import {Filter} from './NewsFilter.styled';
import { setFilter } from '../../redux/Filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';


const NewsFilter = () => {
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return <>
    <Filter
    type="text"
    placeholder="Search"
    value={filterValue}
    onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))} />
    </>
}

export default NewsFilter;
