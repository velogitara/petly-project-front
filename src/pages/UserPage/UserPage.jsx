import UserProfile from 'components/UserPageComponents/UserProfile';
import UserHeader from 'components/UserPageComponents/UserHeader';
import PetGallery from 'components/UserPageComponents/PetGallery';
import AddPet from 'components/UserPageComponents/AddPet';
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
  const { user, isLoading } = useGetCurrentUser();

  const pets = [
    {
      _id: '637a6769dd0464a181a70aa0',
      name: 'Bob',
      birthday: '2022-03-01T00:00:00.000Z',
      breed: 'labrador',
      imageURL: null,
      comments: 'my lovely dog',
      owner: '6371376655714f3cabcd9df2',
    },
    {
      _id: '637a6769dd0464a181a70aa4',
      name: 'Bob',
      birthday: '2022-03-01T00:00:00.000Z',
      breed: 'labrador',
      imageURL: {
        mobile: 'pets/637a6769dd0464a181a70aa0-240x240.jpg',
        mobile_retina: 'pets/637a6769dd0464a181a70aa0-240x240@2x.jpg',
        tablet: 'pets/637a6769dd0464a181a70aa0-161x161.jpg',
        tablet_retina: 'pets/637a6769dd0464a181a70aa0-161x161@2x.jpg',
        profile: 'pets/637a6769dd0464a181a70aa0-288x328.jpg',
        profile_retina: 'pets/637a6769dd0464a181a70aa0-288x328@2x.jpg',
      },
      comments: 'my lovely dog',
      owner: '6371376655714f3cabcd9df2',
    },
  ];

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
                <AddPet />
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
                <AddPet />
              </HeaderContainer>
            ) : (
              <UserHeader text="My pets:" className="pets" />
            )}
            <PetGallery pets={pets} />
          </PetsContainer>
        </Container>
      )}
    </>
  );
};

export default UserPage;
