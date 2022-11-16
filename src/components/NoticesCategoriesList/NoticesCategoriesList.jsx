import { useParams } from 'react-router-dom';
import { useNoticesByCategory } from 'hooks';
import { favoriteCheck } from 'helpers';
import NoticeCategoryItem from 'components/NoticeCategoryItem';

import { CategoriesList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const userId = '636e250a3fc8cdfd9b8f0cba'; // hardcode to remove
  const notices = useNoticesByCategory({ category: categoryName });

  return (
    <CategoriesList>
      {notices.map(({ _id, imageURL, title, breed, birthday, location, favorite, owner }) => (
        <NoticeCategoryItem
          _id={_id}
          imageURL={imageURL}
          title={title}
          breed={breed}
          birthday={birthday}
          location={location}
          key={_id}
          category={categoryName}
          favorite={favoriteCheck({ userId, favorite })}
          owner={owner._id}
        />
      ))}
    </CategoriesList>
  );
};

export default NoticesCategoriesList;
