import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import {
  InfoContainer,
  InfoForm,
  InfoLabel,
  InfoInput,
  InfoButton,
  SvgCheck,
  SvgEdit,
  DateInput,
  ErrorMessageInput,
} from './UserProfileInfoField.styled';
import ValidationSchema from '../UserEditValidation/UserEditValidation';
import { parseBirthday } from 'helpers';
import DatePickerField from 'components/DatePickerForm/DatePikerForm';
import { useUpdateUserInfoMutation } from 'redux/user';
import icons from '../../../assets/icons/icons.svg';

const UserProfileInfoField = ({ id, label, text, isEditing, onFieldEddited, date = false }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [value, setValue] = useState('');
  const [updateUserInfo] = useUpdateUserInfoMutation();

  useEffect(() => {
    setValue(text);
  }, [text]);

  const onEditButtonClick = () => {
    setIsInEditMode(true);
    onFieldEddited(true);
  };

  const checkDate = date => {
    if (date === '') {
      return '00.00.0000';
    } else {
      return parseBirthday(value);
    }
  };

  return (
    <>
      {isInEditMode ? (
        <Formik
          initialValues={{
            [id]: date && text === '' ? null : text,
          }}
          validationSchema={ValidationSchema}
          onSubmit={async data => {
            if (data.birthday) {
              if (typeof data.birthday !== 'object') {
                onFieldEddited(false);
                setIsInEditMode(false);
              }
              var x = new Date().getTimezoneOffset() * 60000;
              var localISOTime = new Date(data.birthday - x).toISOString().slice(0, -1);
              data.birthday = localISOTime;
            }
            const user = { [id]: data[id] };
            const parsedData = JSON.stringify(user);
            const payload = new FormData();
            payload.append('data', parsedData);
            try {
              await updateUserInfo({ payload }).then(response => {
                if (response?.status !== 200) {
                  toast.error(response.error?.data?.message);
                }
              });
            } catch (error) {
              console.log(error);
            } finally {
              onFieldEddited(false);
              setIsInEditMode(false);
            }
          }}
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
            <>
              <InfoForm onSubmit={handleSubmit}>
                <InfoLabel htmlFor={label}>{label}</InfoLabel>
                {date ? (
                  <DateInput>
                    <DatePickerField
                      onChange={setFieldValue}
                      name={id}
                      value={Date.parse(values[id])}
                    />
                  </DateInput>
                ) : (
                  <InfoInput
                    type="text"
                    id={label}
                    name={id}
                    readOnly={!isInEditMode}
                    className={'edit'}
                    value={values[id]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
                <InfoButton type="submit">
                  <SvgCheck>
                    <use href={`${icons}#icon-check`}></use>
                  </SvgCheck>
                </InfoButton>
              </InfoForm>
              <ErrorMessage name={id} component={ErrorMessageInput} />
            </>
          )}
        </Formik>
      ) : (
        <InfoContainer>
          <InfoLabel htmlFor={label}>{label}</InfoLabel>
          <InfoInput
            type="text"
            id={label}
            name={label}
            readOnly={!isInEditMode}
            className={'non-edit'}
            value={date ? checkDate(value) : value}
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
