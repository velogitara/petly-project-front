import { useGetCurrentUserQuery } from 'redux/user';

const useGetCurrentUser = () => {
  const { data, isLoading } = useGetCurrentUserQuery();

  return { user: data?.data?.user, pets: data?.data?.pets ?? [], isLoading };
};

export { useGetCurrentUser };
