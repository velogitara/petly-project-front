import { useListNoticesByCategoryQuery } from 'redux/notices';
// import { useSelector } from 'react-redux';
// import { selectAuthToken } from 'redux/authState';

const useNoticesByCategory = ({ category, page = 1, limit = 8 }) => {
  // const isLogged = useSelector(selectAuthToken);
  const { data } = useListNoticesByCategoryQuery(
    { category, page, limit },
    {
      // skip: !isLogged,
      refetchOnMountOrArgChange: true,
    }
  );

  return data?.data?.notices ?? [];
};

export { useNoticesByCategory };
