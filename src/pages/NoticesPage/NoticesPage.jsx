import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import { Container } from 'helpers';

const NoticesPage = () => {
  return (
    <Container>
      <TitlePage title="Find your favorite pet"></TitlePage>
      <InputSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <ModalNotice />
    </Container>
  );
};

export default NoticesPage;