import { useListNewsQuery } from 'redux/news';

const useNews = ({page= 1, query=''}) => {
  const {data, isSuccess} = useListNewsQuery({ page, query });
  console.log(isSuccess)
  return {news: data?.data?.news ?? [], isSuccess};
};

export { useNews };
