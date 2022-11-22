import { useGetNoticesByIdQuery } from 'redux/notices';

const useGetNoticeById = ({ noticeId }) => {
  // const isLogged = useSelector(selectAuthToken);
  const { data, isLoading, isSuccess } = useGetNoticesByIdQuery(
    { noticeId },
    {
      // skip: !isLogged,
      refetchOnMountOrArgChange: true,
    }
  );

  return { notice: data?.data?.notice ?? null, isLoading, isSuccess };
};

export { useGetNoticeById };
