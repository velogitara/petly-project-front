import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthId, selectAuthToken } from 'redux/authState';
import { useNotices } from 'hooks';
import { favoriteCheck } from 'helpers';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import Paginator from 'components/Paginator';
import Loader from 'components/Loader';
import { CategoriesList, Message } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const [page, setPage] = useState(1);
  const isLogged = useSelector(selectAuthToken);
  const authId = useSelector(selectAuthId);

  const categoryName = useLocation().pathname.replace('/notices/', '');

  const { notices, totalPages, isLoading } = useNotices({ categoryName, page, limit: 2 }); // TODO: change limit to 8

  const isNotices = notices.length !== 0;
  return (
    <>
      {isLoading && <Loader />}
      {!isNotices && <Message>Looks like there are no Ads here, yet.</Message>}
      {isNotices && (
        <CategoriesList>
          {notices.map(
            ({
              _id,
              category,
              imageURL,
              title,
              breed,
              birthday,
              location,
              favorite,
              owner,
              price,
            }) => (
              <NoticeCategoryItem
                _id={_id}
                imageURL={imageURL}
                title={title}
                breed={breed}
                birthday={birthday}
                location={location}
                key={_id}
                category={category}
                favorite={favoriteCheck({ userId: isLogged && authId ? authId : null, favorite })}
                owner={owner?._id ?? owner}
                price={price}
              />
            )
          )}
        </CategoriesList>
      )}
      <Paginator
        totalPages={totalPages}
        onPageSelect={({ currentPage }) => setPage(currentPage)}
        startPage={page}
      />
    </>
  );
};

export default NoticesCategoriesList;
