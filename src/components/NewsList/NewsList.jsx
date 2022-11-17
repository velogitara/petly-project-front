import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import NewsItem from '../NewsItem/NewsItem';
import List from './NewsList.styled';


const NewsList = ({news}) => {
  const filterValueFromStore = useSelector(state => state.filter.value);


 const newsForRender = news.map(item => {
    const date = item.createdAt.slice(0, 10).split('-');
    const year = date[0];
    const month = date[1];
    const day = date[2];

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
    else {
      return <NewsItem key={nanoid()} title={item.title} url={item.url} description={item.description} date={`${day}/${month}/${year}`}/>
    }

  })

  return <List children={newsForRender}></List>
};

export default NewsList;
