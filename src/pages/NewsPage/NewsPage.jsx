import NewsList from 'components/NewsList';
import TitlePage from 'components/TitlePage';
import Button from 'components/Button';
import InputSearch from 'components/InputSearch';
import SearchError from 'components/SearchError';
import { useNews } from 'hooks';
import { useEffect, useState } from 'react';
import { ContainerWithPadding } from './NewsPage.styled'


const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [allNews, setAllNews] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const { data, isLoading } = useNews({ page, query });
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
   setAllNews((prevState) => ([...prevState, ...data]));

    if (data.length === 0 && !isLoading && page === 1) {
      setError('error');
    } else {
      setError(null);
    }

    if (data.length === 6){
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [data, isLoading]);



  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.body.offsetHeight,
  //     behavior: 'smooth',
  //   })
  // }, [data]);

  function onLoadMoreBtnClick() {
    setPage((prevState) => prevState + 1);
  }

  function onSubmit(e) {
    e.preventDefault();
    const searchedValue = e.currentTarget.parentElement.elements['search'].value;
    if (query !== searchedValue) {
      setQuery(searchedValue);
      setPage(1);
      setAllNews([]);
      setShowButton(false);
      document.getElementById("searchForm").reset();
    }
  }

  return <ContainerWithPadding>
    <TitlePage title={"News"} />
    <InputSearch onSubmit={e => onSubmit(e)}/>
    {error? <SearchError query={query}/> : <NewsList news={allNews}/>}
    {showButton && <Button title="Load more" margin="60px 0 0 0" styled="formAuth on" onClick={e=>onLoadMoreBtnClick(e)}></Button>}
  </ContainerWithPadding>
};

export default NewsPage;
