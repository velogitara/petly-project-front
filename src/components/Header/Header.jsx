import PropTypes from 'prop-types';
import { Container } from 'helpers';
import Logo from '../Logo';
import Navigation from '../Navigation';
import icons from '../../assets/icons/icons.svg';
import { HeaderBox, MenuButton } from './Header.styled';

const Header = ({ onWidth, onOpenMenu, onCloseMenu }) => {
  return (
    <header>
      <Container>
        <HeaderBox>
          <Logo />
          {onWidth >= 768 && <Navigation onWidth={onWidth} onCloseMenu={onCloseMenu} />}
          {onWidth < 1280 && (
            <MenuButton onClick={() => onOpenMenu()}>
              <svg width="30" height="20">
                <use href={`${icons}#icon-menu`}></use>
              </svg>
            </MenuButton>
          )}
        </HeaderBox>
      </Container>
    </header>
  );
};

Header.propTypes = {
  onWidth: PropTypes.number.isRequired,
  onOpenMenu: PropTypes.func.isRequired,
  onCloseMenu: PropTypes.func,
};

export default Header;
