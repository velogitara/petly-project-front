import { useGetNoticesByIdQuery } from 'redux/notices';

const useGetNoticeById = ({ noticeId }) => {
  // const isLogged = useSelector(selectAuthToken);
  const { data } = useGetNoticesByIdQuery(
    { noticeId },
    {
      // skip: !isLogged,
      refetchOnMountOrArgChange: true,
    }
  );

  return data?.data?.notice ?? null;
};

export { useGetNoticeById };
