import { useParams } from 'react-router-dom';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import { useNoticesByCategory } from 'hooks';
import { CategoriesList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = () => {
  const { categoryName } = useParams();
  const notices = useNoticesByCategory({ category: categoryName });

  return (
    <CategoriesList>
      {notices.map(({ _id, imageURL, title, breed, birthday, location }) => (
        <NoticeCategoryItem
          _id={_id}
          imageURL={imageURL}
          title={title}
          breed={breed}
          birthday={birthday}
          location={location}
          key={_id}
        />
      ))}
    </CategoriesList>
  );
};

export default NoticesCategoriesList;
