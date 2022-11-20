import {
  InfoContainer,
  InfoForm,
  InfoLabel,
  InfoInput,
  InfoButton,
  SvgCheck,
  SvgEdit,
} from './UserProfileInfoField.styled';
import icons from '../../../assets/icons/icons.svg';
import { useState } from 'react';

const UserProfileInfo = ({ label, text = '', isEditing, onFieldEddited }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);

  const onEditButtonClick = () => {
    setIsInEditMode(true);
    onFieldEddited();
  };

  return (
    <>
      {isInEditMode ? (
        <InfoForm>
          <InfoLabel htmlFor={label}>{label}</InfoLabel>
          <InfoInput
            type="text"
            id={label}
            name={label}
            readOnly={!isInEditMode}
            className={'edit'}
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

export default UserProfileInfo;
