import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import { useParams } from 'react-router-dom';

import { constants } from 'constants/constants';

import {
  AddButton,
  AddButtonContainer,
  AddButtonIcon,
  AddButtonLabel,
  NavContainer,
  NavLinksContainer,
  NavLinks,
  Link,
  AddButtonSpan,
} from './NoticesCategoriesNav.styled';

const { icons } = constants;

const {
  categories: { publicCategories, privateCategories },
} = constants;
const publicLinks = Object.values(publicCategories);
const privateLinks = Object.values(privateCategories);

const NoticesCategoriesNav = () => {
  const { categoryName } = useParams();

  const isLogged = useSelector(selectAuthToken);

  return (
    <NavContainer>
      <NavLinksContainer>
        {publicLinks.map(([category, name], index) => (
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
            {privateLinks.map(([category, name], index) => (
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
      <AddButtonContainer>
        <AddButtonLabel>add pet</AddButtonLabel>
        <AddButton>
          <AddButtonIcon>
            <use href={`${icons}#icon-plus`} />
          </AddButtonIcon>
          <AddButtonSpan>add pet</AddButtonSpan>
        </AddButton>
      </AddButtonContainer>
    </NavContainer>
  );
};

NoticesCategoriesNav.propTypes = {
  active: PropTypes.bool,
};

export default NoticesCategoriesNav;