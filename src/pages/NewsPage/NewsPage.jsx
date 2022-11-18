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
import { useListNewsQuery } from 'redux/news';

const NewsPage = () => {
  // const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const filter = useSelector((state) => state.filter.value);
  const [allNews, setAllNews] = useState([]);
  let [page, setPage] = useState(1);
  const { data, isLoading, ...rest } = useListNewsQuery({ page, query });
  // const news = useNews({page: page.current, query:''});


  useEffect(() => {
    if (page > 1 && data?.news.length) {
      setAllNews((prevState) => ([...prevState, ...data.news]))
    }
  }, [page]);

  useEffect(() => {
    window.scrollTo({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    })
  }, [data?.news]);



  function onLoadMoreBtnClick() {
    setPage((prev) => prev + 1)
  }

  function onSubmit(e, val) {
    e.preventDefault();
    // let val = e;
    console.log({val});
    setQuery(filter);
    setPage(1);
    setAllNews([]);

    //
    // setAllNews([]);
    // dispatch(setFilter(value));

  }

  return <Container>
    <TitlePage title={"News"}/>
    <NewsFilter onSubmit={e => onSubmit(e)}/>
    {/*{isLoading && <div>'loading...'</div>}*/}
    {isLoading ? 'loading...': <NewsList news={[...allNews, ...data?.news]}/>}
    {data?.news && <Button title="Load more" margin="40px 0 0 0" styled="formAuth on" onClick={e=>onLoadMoreBtnClick(e)}></Button>}
  </Container>
};

export default NewsPage;
