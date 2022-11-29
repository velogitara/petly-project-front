import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { NavButtonsContainer, NavButton } from './PopUpNavButtons.styled';

const PopUpNavButtons = ({ navigateTo, title, onNavigate }) => {
  const navigate = useNavigate();
  return (
    <NavButtonsContainer>
      <NavButton
        type="button"
        title={`Go to ${title} page`}
        onClick={() => {
          navigate(navigateTo);
        }}
      >
        {title}
      </NavButton>
    </NavButtonsContainer>
  );
};

PopUpNavButtons.propTypes = {
  navigateTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default PopUpNavButtons;
