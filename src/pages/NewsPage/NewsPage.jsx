import NewsList from 'components/NewsList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import SearchError from 'components/SearchError';
import Paginator from 'components/Paginator';
import { useNews } from 'hooks';
import { useEffect, useState } from 'react';
import { ContainerWithPadding } from './NewsPage.styled';
import Loader from 'components/Loader';

const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const { data, isLoading } = useNews({ page: page.currentPage, query });

  let news = [];
  let totalPages = 1;

  if (data.length !== 0) {
    news = data.news;
    totalPages = data.totalPages;
  }

  useEffect(() => {
    if (news.length === 0 && !isLoading) {
      setError('error');
    } else {
      setError(null);
    }
  }, [page, news.length, isLoading, query]);

  function onSubmit(e) {
    e.preventDefault();
    const searchedValue = e.currentTarget.parentElement.elements['search'].value;
    if (query !== searchedValue) {
      setQuery(searchedValue);
      setPage(1); 
    }
  }

  function onClick(e) {
    document.getElementById("searchForm").reset();
    setQuery('');
    setPage(1); 
  }

  return <ContainerWithPadding>
    <TitlePage title={"News"} />
    <InputSearch onSubmit={e => onSubmit(e)} onClick={e => onClick(e)} />
    {isLoading && <Loader />}
    {error && !isLoading ? <SearchError query={query} /> : <NewsList news={news} />}
    {!isLoading && !error && <Paginator totalPages={totalPages} onPageSelect={setPage} startPage={1} />}
  </ContainerWithPadding>
};

export default NewsPage;