import PropTypes from 'prop-types';
import { constants } from 'constants/constants';
import { FavButton, FavIcon } from './FavoriteButton.styled';

const { icons } = constants;

const FavoriteButton = ({ favorite, toggleFavorite, title }) => {
  return (
    <FavButton favorite={favorite} type="button" title={title} onClick={toggleFavorite}>
      <FavIcon aria-label="In Favorites">
        <use href={`${icons}#icon-heart-outlined`} />
      </FavIcon>
    </FavButton>
  );
};

FavoriteButton.propTypes = {
  favorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FavoriteButton;
