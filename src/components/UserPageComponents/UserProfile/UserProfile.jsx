import { UserContainer, UserProfileInfo, UserProfileForm } from './UserProfile.styled';
import UserProfileInfoField from 'components/UserPageComponents/UserProfileInfoField';
import UserProfileAvatar from 'components/UserPageComponents/UserProfileAvatar';
import UserLogout from 'components/UserPageComponents/UserLogout';
import PropTypes from 'prop-types';
import { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { name, email, birthday, phone, location, avatarURL } = user;

  const onFieldEddited = value => {
    setIsEditing(value);
  };

  return (
    <UserContainer>
      <UserProfileForm>
        <UserProfileAvatar
          name={name}
          avatarURL={avatarURL}
          isEditing={isEditing}
          onFieldEddited={onFieldEddited}
        />
        <UserProfileInfo>
          <UserProfileInfoField
            id="name"
            label="Name"
            text={name}
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            id="email"
            label="Email"
            text={email}
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            id="birthday"
            label="Birthday"
            text={birthday ?? '00.00.0000'}
            isEditing={isEditing}
            date
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            id="phone"
            label="Phone"
            text={phone}
            isEditing={isEditing}
            onFieldEddited={onFieldEddited}
          />
          <UserProfileInfoField
            id="location"
            label="City"
            text={location}
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

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.any,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};
