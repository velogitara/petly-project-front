import NewsList from 'components/NewsList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import SearchError from 'components/SearchError';
import Paginator from 'components/Paginator';
import { useNews, useTotalNews } from 'hooks';
import { useEffect, useState } from 'react';
import { ContainerWithPadding } from './NewsPage.styled';
import Loader from 'components/Loader';

const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const { data, isLoading } = useNews({ page: page.currentPage, query });
  const { totalNews } = useTotalNews({ query });

  let totalPages = 1;
  if (totalNews > 0) {
    totalPages = Math.ceil(totalNews / 6);
  }

  useEffect(() => {
    if (data.length === 0 && !isLoading && page === 1) {
      setError('error');
    } else {
      setError(null);
    }
  }, [page, data.length, isLoading]);

  function onSubmit(e) {
    e.preventDefault();
    const searchedValue = e.currentTarget.parentElement.elements['search'].value;
    if (query !== searchedValue) {
      setQuery(searchedValue);
      setPage(1);
      document.getElementById("searchForm").reset();
    }
  }

  return <ContainerWithPadding>
    <TitlePage title={"News"} />
    <InputSearch onSubmit={e => onSubmit(e)} />
    {isLoading && <Loader/>}
    {error ? <SearchError query={query} /> : <NewsList news={data} />}
    {(!isLoading && !error) && <Paginator totalPages={totalPages} onPageSelect={setPage} startPage={1} />}
  </ContainerWithPadding>
};

export default NewsPage;
