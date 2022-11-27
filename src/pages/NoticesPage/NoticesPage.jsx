import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputNoticeSearch/InputNoticeSearch'; /* switch inputSearch */
import { NoticesContainer } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <NoticesContainer>
      <TitlePage title="Find your favorite pet"></TitlePage>
      <InputSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </NoticesContainer>
  );
};

export default NoticesPage;
