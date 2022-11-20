import { useState } from 'react';
import { Container } from 'helpers';
import Logo from '../Logo';
import Navigation from '../Navigation';
import icons from '../../assets/icons/icons.svg';
import { HeaderBox, MenuButton } from './Header.styled';
import AddPetView from '../AddPetView/AddPetView';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Container>
        <HeaderBox>
          <Logo />
          <Navigation onOpen={open} />
          <MenuButton onClick={() => setOpen(!open)}>
            <svg width="30" height="20">
              <use href={`${icons}#icon-menu`}></use>
            </svg>
          </MenuButton>
          <AddPetView />
        </HeaderBox>
      </Container>
    </header>
  );
};

export default Header;
