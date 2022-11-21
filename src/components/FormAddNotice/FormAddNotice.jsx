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
        birthday: '',
        breed: '',
        category: '',
        sex: '',
        location: '',
        image: '',
        price: '',
        comments: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={async values => {
        // const { image: file, ...data } = values;
        const data = { ...values };
        if (data.birthday) {
          data.birthday = data.birthday.toISOString();
        }
        // console.log(file, data);
        // onClose();
        await addNotice(data);
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
