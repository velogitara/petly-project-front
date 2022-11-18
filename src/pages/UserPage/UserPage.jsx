import UserProfile from 'components/UserPageComponents/UserProfile';
import UserHeader from 'components/UserPageComponents/UserHeader';
import PetGallery from 'components/UserPageComponents/PetGallery';
import AddPet from 'components/UserPageComponents/AddPet';
import { HeaderContainer, UserContainer, PetsContainer, Container } from './UserPage.styled';
import { useEffect, useState } from 'react';

const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

const screens = { mobile: 'mobile', tablet: 'tablet', desktop: 'desktop' };

const UserPage = () => {
  const updateMedia = () => {
    if (window.innerWidth >= sizes.desktop) {
      return screens.desktop;
    } else if (window.innerWidth >= sizes.tablet) {
      return screens.tablet;
    } else {
      return screens.mobile;
    }
  };

  const [screen, setScreen] = useState(updateMedia);

  const findScreen = () => {
    setScreen(updateMedia);
  };

  useEffect(() => {
    window.addEventListener('resize', findScreen);
    return () => window.removeEventListener('resize', findScreen);
  });

  return (
    <Container>
      <UserContainer>
        {screen === screens.tablet ? (
          <HeaderContainer>
            <UserHeader text="My information:" className="user" />
            <AddPet />
          </HeaderContainer>
        ) : (
          <UserHeader text="My information:" className="user information" />
        )}
        <UserProfile />
      </UserContainer>
      <PetsContainer>
        {screen !== screens.tablet ? (
          <HeaderContainer>
            <UserHeader text="My pets:" />
            <AddPet />
          </HeaderContainer>
        ) : (
          <UserHeader text="My pets:" className="pets" />
        )}
        <PetGallery screen={screen} />
      </PetsContainer>
    </Container>
  );
};

export default UserPage;
