import { useParams } from 'react-router-dom';
import { useNotices } from 'hooks';
import { favoriteCheck } from 'helpers';
import NoticeCategoryItem from 'components/NoticeCategoryItem';

import { CategoriesList } from './NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();

  // const authId = '637021587475d007fb85d3d4'; // hardcode to remove
  const authId = useSelector(selectAuthId);

  const notices = useNotices({ category: categoryName });

  return (
    <CategoriesList>
      {notices.length !== 0 &&
        notices.map(
          ({ _id, imageURL, title, breed, birthday, location, favorite, owner, price }) => (
            <NoticeCategoryItem
              _id={_id}
              imageURL={imageURL}
              title={title}
              breed={breed}
              birthday={birthday}
              location={location}
              key={_id}
              category={categoryName}
              favorite={favoriteCheck({ userId: authId, favorite })}
              owner={owner._id}
              price={price}
            />
          )
        )}
    </CategoriesList>
  );
};

export default NoticesCategoriesList;
