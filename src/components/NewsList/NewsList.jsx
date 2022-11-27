import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import NewsItem from '../NewsItem/NewsItem';
import List from './NewsList.styled';


const NewsList = ({news}) => {

  const newsForRender = news.map(item => {
    const date = item.createdAt.slice(0, 10).split('-');
    const year = date[0];
    const month = date[1];
    const day = date[2];
    return <NewsItem key={nanoid()} title={item.title} url={item.url} description={item.description} date={`${day}/${month}/${year}`}/>
  })
  return <List children={newsForRender}></List>
};

export default NewsList;

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })),
}
