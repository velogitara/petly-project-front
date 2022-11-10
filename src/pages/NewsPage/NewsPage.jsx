import news from "./news.json";
import NewsItem from '../../components/NewsItem/NewsItem';
import { nanoid } from '@reduxjs/toolkit';


const NewsPage = () => {


  const newsItemList = news.map(item => {

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


    return <NewsItem key={nanoid()} title={item.title} url={item.url} description={item.description} date={`${day}/${month}/${year}`}/>
  })

  return <ul children={newsItemList}></ul>

}

export default NewsPage;
