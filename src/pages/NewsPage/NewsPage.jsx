import NewsList from 'components/NewsList';
import NewsFilter from 'components/NewsFilter';
import { Container } from '../../helpers';
import TitlePage from 'components/TitlePage';

const NewsPage = () => {

  return <Container>
    <TitlePage title={"News"}/>
    <NewsFilter/>
    <NewsList/>
  </Container>

};

export default NewsPage;
