import NewsList from 'components/NewsList';
import NewsFilter from 'components/NewsFilter';
import { Container } from '../../helpers';
import TitlePage from 'components/TitlePage';
import Button from '../../components/Button';
import { useNews } from '../../hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const NewsPage = () => {
  const filter = useSelector((state) => state.filter.value);
  const [query, setQuery] = useState('');
  const [allNews, setAllNews] = useState([]);
  let [page, setPage] = useState(1);
  const { data, isLoading } = useNews({ page, query });
  
  useEffect(() => {
    setAllNews((prevState) => ([...prevState, ...data]));  
  }, [data]);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.body.offsetHeight,
  //     behavior: 'smooth',
  //   })
  // }, [data]);



  function onLoadMoreBtnClick() {
    setPage((prev) => prev + 1);
  }

  function onSubmit(e) {
    e.preventDefault();
    setQuery(filter);
    setPage(1);
    setAllNews([]);
  }

  return <Container>
    <TitlePage title={"News"}/>
    <NewsFilter onSubmit={e => onSubmit(e)}/>
    {isLoading ? 'loading...': <NewsList news={allNews}/>}
    {data.length > 0 && <Button title="Load more" margin="40px 0 0 0" styled="formAuth on" onClick={e=>onLoadMoreBtnClick(e)}></Button>}
  </Container>
};

export default NewsPage;
