import NewsList from 'components/NewsList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import SearchError from 'components/SearchError';
import Paginator from 'components/Paginator';
import { useNews } from 'hooks';
import ModalAddNews from 'components/ModalAddNews/ModalAddNews';
import AddPetButton from 'components/AddPetButton';
import { useEffect, useState } from 'react';
import { ContainerWithPadding} from './NewsPage.styled'

const NewsPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const { data, isLoading } = useNews({ page: page.currentPage, query });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen)

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
    {isLoading && "Loading..."}
    <AddPetButton>
      <ModalAddNews onClose={toggleModal} />
    </AddPetButton>
    {error ? <SearchError query={query} /> : <NewsList news={data} />}
    {(!isLoading && !error) && <Paginator totalPages={10} onPageSelect={setPage} startPage={1} />}
  </ContainerWithPadding>
};

export default NewsPage;
