import { useNavigate, useLocation } from 'react-router-dom';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import TitlePage from 'components/TitlePage';
import InputSearch from 'components/InputSearch';
import { NoticesContainer } from './NoticesPage.styled';
import { useEffect } from 'react';

const NoticesPage = () => {
  const location = useLocation().pathname.replace('/notices', '');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
    if (!location) {
      navigate('/notices/sell', { replace: true });
    }
  }, [location, navigate]);

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
