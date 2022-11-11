import {Filter, Icon} from './NewsFilter.styled';
import { setFilter } from '../../redux/Filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const NewsFilter = () => {
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return <>
    <Icon >

     <use href="../../assets/icons/icons.svg#icon-search"></use>
    </Icon>
    <Filter
    type="text"
    name="newsFilter"
    placeholder="Search"
    value={filterValue}
    onChange={e => dispatch(setFilter(e.target.value.toLocaleLowerCase()))} />
    </>
}

export default NewsFilter;
