import { UserContainer, UserProfileInfo, UserProfileForm } from './UserProfile.styled';
import UserProfileInfoField from 'components/UserPageComponents/UserProfileInfoField';
import UserProfileAvatar from 'components/UserPageComponents/UserProfileAvatar';
import UserLogout from 'components/UserPageComponents/UserLogout';
import { useState } from 'react';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const onFieldEddited = () => {
    setIsEditing(true);
  };

  return (
    <UserContainer>
      <UserProfileForm>
        <UserProfileAvatar isEditing={isEditing} onFieldEddited={onFieldEddited} />
        <UserProfileInfo>
          <UserProfileInfoField
            label="name"
            text="Anna"
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            label="name"
            text="Anna"
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            label="name"
            text="Anna"
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            label="name"
            text="Anna"
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
        </UserProfileInfo>
      </UserProfileForm>
      <UserLogout />
    </UserContainer>
  );
};

export default UserProfile;
