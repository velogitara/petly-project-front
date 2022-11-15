import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
// import { useSelector } from 'react-redux';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import { Container } from 'helpers';

const NoticesPage = () => {
  return (
    <Container>
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </Container>
  );
};

export default NoticesPage;
