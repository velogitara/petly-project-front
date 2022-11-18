import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import { useListNoticesByCategoryQuery, useListUserNoticesQuery } from 'redux/notices';

const useNotices = ({ category, page = 1, limit = 8 }) => {
  const isLogged = useSelector(selectAuthToken);

  const isOwn = category === 'own';
  const isFavorite = category === 'favorite';
  const isByCategory = !isOwn && !isFavorite;

  const byCategoryNotices = useListNoticesByCategoryQuery(
    { category, page, limit },
    {
      skip: isOwn || isFavorite,
      refetchOnMountOrArgChange: true,
    }
  )?.data?.data?.notices;
  const ownNotices = useListUserNoticesQuery(
    { category, page, limit },
    {
      skip: !isLogged || isFavorite || isByCategory,
      refetchOnMountOrArgChange: true,
    }
  )?.data?.data?.notices;
  const favoriteNotices = useListUserNoticesQuery(
    { category, page, limit },
    {
      skip: !isLogged || isOwn || isByCategory,
      refetchOnMountOrArgChange: true,
    }
  )?.data?.data?.notices;

  let result;
  switch (category) {
    case 'own':
      result = ownNotices;
      break;
    case 'favorites':
      result = favoriteNotices;
      break;
    default:
      result = byCategoryNotices;
  }
  return result ?? [];
};

export { useNotices };
