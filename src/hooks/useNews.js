import { useListNewsQuery } from 'redux/news';

const useNews = ({page= 1, query=''}) => {
  const { data, isLoading } = useListNewsQuery({ page, query });
  
  
  
  return { data: data?.news ?? [], isLoading};
};

export { useNews };
