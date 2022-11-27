import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import {
  useListNoticesByCategoryQuery,
  useListUserNoticesQuery,
  // useListNoticesByQueryQuery,
} from 'redux/notices';

const useNotices = ({ categoryName, query = '', page = 1, limit = 8 }) => {
  const isLogged = useSelector(selectAuthToken);

  const isOwn = categoryName === 'own';
  const isFavorite = categoryName === 'favorite';
  // const isCategoryQuery = categoryName === 'categoryQuery';
  const isByCategory = !isOwn && !isFavorite;

  const { data: byCategoryNotices, isLoading: isLoadByCategory } = useListNoticesByCategoryQuery(
    { category: categoryName, page, limit },
    {
      skip: isOwn || isFavorite,
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: ownNotices, isLoading: isLoadOwn } = useListUserNoticesQuery(
    { category: categoryName, page, limit },
    {
      skip: !isLogged || isFavorite || isByCategory,
      refetchOnMountOrArgChange: true,
    }
  );
  const { data: favoriteNotices, isLoading: isLoadFavorite } = useListUserNoticesQuery(
    { category: categoryName, page, limit, favorite: true },
    {
      skip: !isLogged || isOwn || isByCategory,
      refetchOnMountOrArgChange: true,
    }
  );
  // const { data: categoryQuery, isLoading: isLoadCategoryQuery } = useListNoticesByQueryQuery(
  //   {
  //     category: categoryName,
  //     query: query,
  //     page,
  //     limit,
  //   },
  //   {
  //     skip: !isLogged || isFavorite || isByCategory || isCategoryQuery,
  //     refetchOnMountOrArgChange: true,
  //   }
  // );

  let result;
  switch (categoryName) {
    case 'own':
      result = ownNotices;
      break;
    case 'favorite':
      result = favoriteNotices;
      break;
    // case 'categoryQuery':
    //   result = categoryQuery;
    //   break;
    default:
      result = byCategoryNotices;
  }
  return {
    notices: result?.data?.notices ?? [],
    totalPages: result?.data?.totalPages ?? 1,
    isLoading: isLoadByCategory || isLoadOwn || isLoadFavorite,
  };
};

export { useNotices };
