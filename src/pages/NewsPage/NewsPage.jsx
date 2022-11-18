import NewsList from 'components/NewsList';
import NewsFilter from 'components/NewsFilter';
import { Container } from '../../helpers';
import TitlePage from 'components/TitlePage';
import Button from '../../components/Button';
import { useNews } from '../../hooks';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { setFilter } from 'redux/filter';

const NewsPage = () => {
  // const dispatch = useDispatch();
  const query = useSelector(state => state.filter.value).trim();

  let page = useRef(1);
  const [allNews, setAllNews] = useState([]);
  const news = useNews({page: page.current, query});

  useEffect(() => {
    if(news?.length > 0 && allNews.length === 0) {
      setAllNews(news)
    };

    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    })
  }, [news, allNews.length]);

  function onLoadMoreBtnClick() {
    page.current = page.current + 1;
    setAllNews(prevState => {
      return [...prevState, ...news];
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    page.current = 1;
    setAllNews([]);
    // dispatch(setFilter(value));

  }

  return <Container>
    <TitlePage title={"News"}/>
    <NewsFilter onSubmit={e => onSubmit(e)}/>
    <NewsList news={allNews}/>
    {news.length > 0 && <Button title="Load more" margin="40px 0 0 0" styled="formAuth on" onClick={e=>onLoadMoreBtnClick(e)}></Button>}
  </Container>
};

export default NewsPage;
