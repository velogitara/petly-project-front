import { useListUserNoticesQuery } from 'redux/notices';

const useUserNotices = ({ page = 1, limit = 8, favorite = false }) => {
  const { data } = useListUserNoticesQuery(
    { page, limit, favorite },
    {
      // skip: !isLogged,
      refetchOnMountOrArgChange: true,
    }
  );

  return data?.data?.notices ?? [];
};

export { useUserNotices };
