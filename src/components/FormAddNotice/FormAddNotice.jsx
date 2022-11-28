import React, { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import ValidationSchema from 'components/FormAddNoticeValidation';
import FormAddNoticeStepFirst from 'components/FormAddNoticeStepFirst';
import FormAddNoticeStepSecond from 'components/FormAddNoticeStepSecond';
import { toast } from 'react-toastify';

function FormAddNotice({ onClose, addNotice }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const submitAddNoticeForm = async values => {
    const { image, ...data } = values;

    if (data.birthday) {
      data.birthday = data.birthday.toISOString();
    }
    if (!data.name) {
      data.name = 'No name';
    }
    if (!data.birthday) {
      data.birthday = '0000';
    }
    if (!data.breed) {
      data.breed = 'outbreed';
    }
    if (!data.price) {
      data.price = 0;
    }

    const payload = new FormData();
    payload.append('image', image);
    payload.append('data', JSON.stringify(data));
    onClose();
    try {
      await addNotice({ payload }).then(response => {
        if (response.error) {
          toast.error(response.error.data.message);
        }
        if (response.data) {
          toast.success(response?.data?.message ?? 'Success');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        title: '',
        name: '',
        birthday: null,
        breed: '',
        category: '',
        sex: '',
        location: '',
        image: null,
        price: '',
        comments: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={values => submitAddNoticeForm(values)}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <>
          {activeStepIndex === 0 && (
            <FormAddNoticeStepFirst
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              onClose={onClose}
              setActiveStepIndex={setActiveStepIndex}
              setFieldValue={setFieldValue}
            />
          )}
          {activeStepIndex === 1 && (
            <FormAddNoticeStepSecond
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
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

export default FormAddNotice;

FormAddNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  addNotice: PropTypes.func.isRequired,
};
