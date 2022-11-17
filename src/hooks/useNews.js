import { useListNewsQuery } from 'redux/news';

const useNews = ({page= 1}) => {
  const { data } = useListNewsQuery(
    { page },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  return data?.data?.news ?? [];
};

export { useNews };
