import NewsList from 'components/NewsList';
import NewsFilter from 'components/NewsFilter';
import { Container } from '../../helpers';
import TitlePage from 'components/TitlePage';
import Button from '../../components/Button';
import { useNews } from '../../hooks';
import { useEffect, useState } from 'react';

const NewsPage = () => {

  const [page, setPage] = useState(1);
  const [allNews, setAllNews] = useState([]);
  const news = useNews({page});

  useEffect(() => {
    if(news?.length > 0 && allNews.length === 0) {
      setAllNews(news)
    }
  }, [news, allNews.length]);

  function onLoadMoreBtnClick() {
    setPage(page + 1);
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
