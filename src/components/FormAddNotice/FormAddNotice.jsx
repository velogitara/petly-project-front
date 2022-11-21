import React, { useState } from 'react';
import { Formik } from 'formik';
import { useAddNoticeMutation } from '../../redux/notices';

import ValidationSchema from 'components/FormAddNoticeValidation';
import FormAddNoticeStepFirst from 'components/FormAddNoticeStepFirst';
import FormAddNoticeStepSecond from 'components/FormAddNoticeStepSecond';
function FormAddNotice({ onClose }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [addNotice] = useAddNoticeMutation();

  return (
    <Formik
      initialValues={{
        title: '',
        // description: 'hello',
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
      onSubmit={async values => {
        const { image, ...data } = values;
        console.log(data);

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
          data.breed = 'outbred';
        }
        if (!data.price) {
          data.price = 0;
        }
        const payload = new FormData();
        payload.append('image', image);
        payload.append('data', JSON.stringify(data));
        // const data = { ...values };
        onClose();
        await addNotice({ payload });
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <>
          {activeStepIndex === 0 && (
            <FormAddNoticeStepFirst
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
            <FormAddNoticeStepSecond
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

export default FormAddNotice;
