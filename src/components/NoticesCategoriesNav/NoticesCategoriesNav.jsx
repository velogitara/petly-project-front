import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
import { useParams } from 'react-router-dom';
import AddPetButton from 'components/AddPetButton';
import ModalAddNotice from 'components/ModalAddNotice';

import { constants } from 'constants/constants';

import { NavContainer, NavLinksContainer, NavLinks, Link } from './NoticesCategoriesNav.styled';

const {
  categories: { publicCategories, privateCategories },
} = constants;

const NoticesCategoriesNav = () => {
  const { categoryName } = useParams();

  const authId = useSelector(selectAuthId);

  return (
    <NavContainer>
      <NavLinksContainer>
        {publicCategories.map(([category, name], index) => (
          <Link
            className={categoryName === category ? 'active' : ''}
            to={`/notices/${category}`}
            key={name + index}
          >
            {name}
          </Link>
        ))}
        {authId && (
          <NavLinks>
            {privateCategories.map(([category, name], index) => (
              <Link
                className={categoryName === category ? 'active' : ''}
                to={`/notices/${category}`}
                key={name + index}
              >
                {name}
              </Link>
            ))}
          </NavLinks>
        )}
      </NavLinksContainer>
      <AddPetButton userId={authId}>
        <ModalAddNotice />
      </AddPetButton>
    </NavContainer>
  );
};

NoticesCategoriesNav.propTypes = {
  active: PropTypes.bool,
};

export default NoticesCategoriesNav;
