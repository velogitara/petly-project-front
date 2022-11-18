import NewsList from 'components/NewsList';
import NewsFilter from 'components/NewsFilter';
import { Container } from '../../helpers';
import TitlePage from 'components/TitlePage';
import Button from '../../components/Button';
import { useNews } from '../../hooks';
import { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';

const NewsPage = () => {
  // const query = useSelector(state => state.filter.value).trim();

  let page = useRef(1);
  const [allNews, setAllNews] = useState([]);
  const news = useNews({page: page.current});

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

  return <Container>
    <TitlePage title={"News"}/>
    <NewsFilter/>
    <NewsList news={allNews}/>
    {news.length > 0 && <Button title="Load more" margin="40px 0 0 0" styled="formAuth on" onClick={e=>onLoadMoreBtnClick(e)}></Button>}
  </Container>
};

export default NewsPage;
