import NewsList from 'components/NewsList';
import TitlePage from 'components/TitlePage';
import Button from 'components/Button';
import InputSearch from 'components/InputSearch';
import SearchError from 'components/SearchError';
import { useNews } from 'hooks';
import { useEffect, useState } from 'react';
import { ContainerWithPadding, Wrapper } from './NewsPage.styled'


const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [showNextButton, setNextShowButton] = useState(true);
  const [showPrevButton, setPrevShowButton] = useState(false);
  const { data, isLoading } = useNews({ page, query });

  useEffect(() => {
    if (data.length === 0 && !isLoading && page === 1) {
      setError('error');
    } else {
      setError(null);
    }

    if (data.length === 6){
      setNextShowButton(true);
    } else {
      setNextShowButton(false);
    }

    if (page !== 1){
      setPrevShowButton(true);
    } else {
      setPrevShowButton(false);
    }
  }, [page, data.length, isLoading]);

  function onLoadMoreBtnClick(step) {
      setPage((prevState) => prevState + step);
  }

  function onSubmit(e) {
    e.preventDefault();
    const searchedValue = e.currentTarget.parentElement.elements['search'].value;
    if (query !== searchedValue) {
      setQuery(searchedValue);
      setPage(1);
      setNextShowButton(true);
      setPrevShowButton(false);
      document.getElementById("searchForm").reset();
    }
  }

  return <ContainerWithPadding>
    <TitlePage title={"News"} />
    <InputSearch onSubmit={e => onSubmit(e)}/>
    {error? <SearchError query={query}/> : <NewsList news={data}/>}
    <Wrapper>
      {showPrevButton && <Button title="Prev" styled="news" onClick={e=>onLoadMoreBtnClick(-1)}></Button>}
      {showNextButton && <Button title="Next" styled="news" onClick={e=>onLoadMoreBtnClick(1)}></Button>}
    </Wrapper>
  </ContainerWithPadding>
};

export default NewsPage;
