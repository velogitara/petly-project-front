import { useState } from 'react';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import { NoticesContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const [query, setQuery] = useState(null);

  const handleQuery = e => {
    e.preventDefault();
    const searchedValue = e.currentTarget.parentElement.elements['search'].value;

    setQuery(searchedValue);
  };

  return (
    <NoticesContainer>
      <TitlePage title="Find your favorite pet"></TitlePage>
      <InputSearch onSubmit={e => handleQuery(e)} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList query={query} />
    </NoticesContainer>
  );
};

export default NoticesPage;
