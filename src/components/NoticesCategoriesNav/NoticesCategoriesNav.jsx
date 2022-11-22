import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAuthToken } from 'redux/authState';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const isLogged = useSelector(selectAuthToken);

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
        {isLogged && (
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
      <AddPetButton>
        <ModalAddNotice onClose={toggleModal} />
      </AddPetButton>
    </NavContainer>
  );
};

NoticesCategoriesNav.propTypes = {
  active: PropTypes.bool,
};

export default NoticesCategoriesNav;
