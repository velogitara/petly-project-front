import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import news from '../../assets/data/news.json';
import NewsItem from '../NewsItem/NewsItem';
import List from './NewsList.styled';
// import { useNews } from '../../hooks';

const NewsList = () => {
  const filterValueFromStore = useSelector(state => state.filter.value);

  // const news = useNews({page: 1});
  // console.log(news)

  const newsForRender = news.map(item => {
    let year = null;
    let month = null;
    let day = null;
    if (item.date) {
      const dateArray = item.date.split('-');
      year = dateArray[0];
      month = dateArray[1];
      day = dateArray[2];
    } else {
      const date = new Date();
      year = date.getFullYear();
      month = date.getMonth();
      day = date.getDate();
    }

    if (filterValueFromStore !== '') {
      if (
        item.title.toLowerCase().includes(filterValueFromStore.trim()) ||
        item.description.toLowerCase().includes(filterValueFromStore.trim())
      ) {
        return (
          <NewsItem
            key={nanoid()}
            title={item.title}
            url={item.url}
            description={item.description}
            date={`${day}/${month}/${year}`}
          />
        );
      }
    }

    return <NewsItem key={nanoid()} title={item.title} url={item.url} description={item.description} date={`${day}/${month}/${year}`}/>
  })

  return <List children={newsForRender}></List>;
};

export default NewsList;
