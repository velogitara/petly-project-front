import UserProfile from 'components/UserPageComponents/UserProfile';
import UserHeader from 'components/UserPageComponents/UserHeader';
import PetGallery from 'components/UserPageComponents/PetGallery';
import AddPetButton from 'components/AddPetButton';
import { HeaderContainer, UserContainer, PetsContainer, Container } from './UserPage.styled';
import { useGetCurrentUser } from 'hooks';
import { useEffect, useState } from 'react';

const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

const screens = { mobile: 'mobile', tablet: 'tablet', desktop: 'desktop' };

const UserPage = () => {
  const { user, pets, isLoading } = useGetCurrentUser();

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
    <>
      {isLoading ? (
        'loading...'
      ) : (
        <Container>
          <UserContainer>
            {screen === screens.tablet ? (
              <HeaderContainer>
                <UserHeader text="My information:" className="user" />
                <AddPetButton user>
                  <></>
                </AddPetButton>
              </HeaderContainer>
            ) : (
              <UserHeader text="My information:" className="user information" />
            )}
            <UserProfile user={user} />
          </UserContainer>
          <PetsContainer>
            {screen !== screens.tablet ? (
              <HeaderContainer>
                <UserHeader text="My pets:" />
                <AddPetButton user>
                  <></>
                </AddPetButton>
              </HeaderContainer>
            ) : (
              <UserHeader text="My pets:" className="pets" />
            )}
            <PetGallery pets={pets} screen={screen} />
          </PetsContainer>
        </Container>
      )}
    </>
  );
};

export default UserPage;
