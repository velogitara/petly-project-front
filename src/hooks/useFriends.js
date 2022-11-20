import { useListFriendsQuery } from 'redux/friends';

const useFriends = () => {
  const { data } = useListFriendsQuery();

  return data?.data?.friends ?? [];
};

export { useFriends };
