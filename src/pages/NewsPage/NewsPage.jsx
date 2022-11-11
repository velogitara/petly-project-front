import NewsList from '../../components/NewsList';
import NewsFilter from '../../components/NewsFilter/NewsFilter';
import { Container } from '../../helpers';
import NewsTitle from '../../components/NewsTitle/NewsTitle';

const NewsPage = () => {

  return <Container>
    <NewsTitle text={"News"}/>
    <NewsFilter/>
    <NewsList/>
  </Container>

};

export default NewsPage;
