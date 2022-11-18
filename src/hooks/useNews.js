import { useListNewsQuery } from 'redux/news';

const useNews = ({page= 1, query=''}) => {
  const { data } = useListNewsQuery({ page, query });
  return data?.data?.news ?? [];
};

export { useNews };
