import React, { useState } from 'react';
import { Formik } from 'formik';
import { useAddNoticeMutation } from '../../redux/notices';

// import {
//   // Comment,
//   Textarea,
//   Button,
//   Text,
//   Form,
//   CategoryBox,
//   Label,
//   ButtonBox,
//   Span,
//   InputBox,
//   BoxLabel,
//   LabelRadio,
//   GenderBox,
//   IconBox,
//   IconMale,
//   IconFemale,
//   LabelIcon,
//   InputFile,
//   IconFile,
//   Figure,
//   CategoryItem,
//   ErrorMessageInput,
//   BoxFlex,
// } from './FormAddNotice.styled';

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
        name: '',
        birthdate: null,
        breed: '',
        category: '',
        gender: '',
        location: '',
        image: '',
        price: '',
        comments: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={async values => {
        const data = { ...values };
        if (data.birthdate) {
          data.birthdate = data.birthdate.toISOString();
        }
        console.log(data);
        onClose();
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
