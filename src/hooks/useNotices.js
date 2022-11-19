import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import { useListNoticesByCategoryQuery, useListUserNoticesQuery } from 'redux/notices';

const useNotices = ({ categoryName, page = 1, limit = 8 }) => {
  const isLogged = useSelector(selectAuthToken);

  const isOwn = categoryName === 'own';
  const isFavorite = categoryName === 'favorite';
  const isByCategory = !isOwn && !isFavorite;

  const byCategoryNotices = useListNoticesByCategoryQuery(
    { category: categoryName, page, limit },
    {
      skip: isOwn || isFavorite,
      refetchOnMountOrArgChange: true,
    }
  )?.data?.data?.notices;
  const ownNotices = useListUserNoticesQuery(
    { category: categoryName, page, limit },
    {
      skip: !isLogged || isFavorite || isByCategory,
      refetchOnMountOrArgChange: true,
    }
  )?.data?.data?.notices;
  const favoriteNotices = useListUserNoticesQuery(
    { category: categoryName, page, limit, favorite: true },
    {
      skip: !isLogged || isOwn || isByCategory,
      refetchOnMountOrArgChange: true,
    }
  )?.data?.data?.notices;

  let result;
  switch (categoryName) {
    case 'own':
      result = ownNotices;
      break;
    case 'favorite':
      result = favoriteNotices;
      break;
    default:
      result = byCategoryNotices;
  }
  return result ?? [];
};

export { useNotices };
