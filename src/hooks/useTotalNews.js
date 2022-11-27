import { useTotalNewsQuery } from 'redux/news';

const useTotalNews = ({query=''}) => {
  const { total, isLoading } = useTotalNewsQuery({ query });

  return { total: total?.news ?? 0, isLoading};
};

export { useTotalNews };
