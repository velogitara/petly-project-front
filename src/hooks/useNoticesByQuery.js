import { useListNoticesByQueryQuery } from 'redux/notices';

const useNoticesByQuery = ({ page = 1, limit = 8, category, searchQuery = '' }) => {
  const { data } = useListNoticesByQueryQuery(
    { page, limit, category, searchQuery },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return data?.data?.notices ?? [];
};

export { useNoticesByQuery };
