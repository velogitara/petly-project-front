import { useState } from 'react';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import { NoticesContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  const [query, setQuery] = useState(null);

  return (
    <NoticesContainer>
      <TitlePage title="Find your favorite pet"></TitlePage>
      <InputSearch onSubmit={searchedValue => setQuery(searchedValue)} query={query} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList query={query} />
    </NoticesContainer>
  );
};
export default NoticesPage;
