import PropTypes from 'prop-types';
import { Container } from 'helpers';
import Logo from '../Logo';
import Navigation from '../Navigation';
import icons from '../../assets/icons/icons.svg';
import { HeaderBox, MenuButton } from './Header.styled';
// import { useState } from 'react';

const Header = ({ onWidth, onOpenMenu }) => {
  // const [open, setOpen] = useState(false);

  return (
    <header>
      <Container>
        <HeaderBox>
          <Logo />
          {onWidth >= 768 && <Navigation onWidth={onWidth} />}
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
};

export default Header;
