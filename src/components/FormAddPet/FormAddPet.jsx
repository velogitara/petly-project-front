import React, { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { useAddPetMutation } from 'redux/user';
import ValidationSchema from 'components/FormAddPetValidation';
import FormAddPetStepFirst from 'components/FormAddPetStepFirst';
import FormAddPetStepSecond from 'components/FormAddPetStepSecond';

function FormAddPet({ onClose }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [addPet] = useAddPetMutation();

  return (
    <Formik
      initialValues={{
        name: '',
        birthday: null,
        breed: '',
        image: null,
        comments: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={async values => {
        const { image, ...data } = values;

        if (data.birthday) {
          data.birthday = data.birthday.toISOString();
        }
        if (!data.name) {
          data.name = null;
        }
        if (!data.birthday) {
          data.birthday = '0000';
        }
        if (!data.breed) {
          data.breed = 'outbreed';
        }
        const payload = new FormData();
        payload.append('image', image);
        payload.append('data', JSON.stringify(data));

        onClose();
        await addPet({ payload });
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <>
          {activeStepIndex === 0 && (
            <FormAddPetStepFirst
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              activeStepIndex={activeStepIndex}
              onClose={onClose}
              setActiveStepIndex={setActiveStepIndex}
              setFieldValue={setFieldValue}
              errors={errors}
            />
          )}
          {activeStepIndex === 1 && (
            <FormAddPetStepSecond
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              activeStepIndex={activeStepIndex}
              onClose={onClose}
              setActiveStepIndex={setActiveStepIndex}
              setFieldValue={setFieldValue}
            />
          )}
        </>
      )}
    </Formik>
  );
}

export default FormAddPet;

FormAddPet.propTypes = {
  onClose: PropTypes.func.isRequired,
};
