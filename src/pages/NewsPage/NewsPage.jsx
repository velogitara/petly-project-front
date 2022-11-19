import NewsList from 'components/NewsList';
import TitlePage from 'components/TitlePage';
import Button from '../../components/Button';
import InputSearch from 'components/InputSearch';
import { useNews } from '../../hooks';
import { useEffect, useState } from 'react';
import { ContainerWithPadding } from './NewsPage.styled';


const NewsPage = () => {
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
    const searchedValue = e.currentTarget.parentElement.elements['search'].value;
    setQuery(searchedValue);
    setPage(1);
    setAllNews([]);
    document.getElementById("searchForm").reset();
  }

  return <ContainerWithPadding>
    <TitlePage title={"News"} />
    <InputSearch onSubmit={e => onSubmit(e)}/>
    {isLoading ? 'loading...': <NewsList news={allNews}/>}
    {data.length > 0 && <Button title="Load more" margin="60px 0 0 0" styled="formAuth on" onClick={e=>onLoadMoreBtnClick(e)}></Button>}
  </ContainerWithPadding>
};

export default NewsPage;
