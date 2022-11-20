import {
  InfoContainer,
  InfoForm,
  InfoLabel,
  InfoInput,
  InfoButton,
  SvgCheck,
  SvgEdit,
} from './UserProfileInfoField.styled';
import { useUpdateUserInfoMutation } from 'redux/user';
import PropTypes from 'prop-types';
import icons from '../../../assets/icons/icons.svg';
import { useEffect, useState } from 'react';

const UserProfileInfoField = ({ id, label, text, isEditing, onFieldEddited }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [value, setValue] = useState('');
  const [updateUserInfo, { isLoading, isError }] = useUpdateUserInfoMutation();

  useEffect(() => {
    setValue(text);
  }, [text]);

  const onEditButtonClick = () => {
    setIsInEditMode(true);
    onFieldEddited(true);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const user = { [id]: value };
    const parsedData = JSON.stringify(user);

    updateUserInfo({ data: parsedData });

    onFieldEddited(false);
    setIsInEditMode(false);

    // const parsedData = JSON.stringify(user);
    // const fd = new FormData();
    // fd.append('data', parsedData);

    // updateUserInfo(fd);
  };

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  return (
    <>
      {isInEditMode ? (
        <InfoForm onSubmit={handleFormSubmit}>
          <InfoLabel htmlFor={label}>{label}</InfoLabel>
          <InfoInput
            type="text"
            id={label}
            name={label}
            readOnly={!isInEditMode}
            className={'edit'}
            value={value}
            onChange={handleInputChange}
          />
          <InfoButton type="submit">
            <SvgCheck>
              <use href={`${icons}#icon-check`}></use>
            </SvgCheck>
          </InfoButton>
        </InfoForm>
      ) : (
        <InfoContainer>
          <InfoLabel htmlFor={label}>{label}</InfoLabel>
          <InfoInput
            type="text"
            id={label}
            name={label}
            readOnly={!isInEditMode}
            className={'non-edit'}
            value={value}
          />
          <InfoButton
            type="button"
            onClick={onEditButtonClick}
            disabled={!isInEditMode && isEditing}
          >
            <SvgEdit>
              <use href={`${icons}#icon-pensil`}></use>
            </SvgEdit>
          </InfoButton>
        </InfoContainer>
      )}
    </>
  );
};

export default UserProfileInfoField;

UserProfileInfoField.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.any.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onFieldEddited: PropTypes.any.isRequired,
  }),
};
