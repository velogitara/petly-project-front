import { useState } from 'react';
import PropTypes from 'prop-types';
import FormAddNoticeStepFirst from 'components/AddNotice/FormAddNoticeStepFirst';
import FormAddNoticeStepSecond from 'components/AddNotice/FormAddNoticeStepSecond';

function FormAddNotice({ onClose, addNotice }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <>
      {activeStepIndex === 0 && (
        <FormAddNoticeStepFirst
          onClose={onClose}
          setActiveStepIndex={setActiveStepIndex}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeStepIndex === 1 && (
        <FormAddNoticeStepSecond
          setActiveStepIndex={setActiveStepIndex}
          formData={formData}
          addNotice={addNotice}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default FormAddNotice;

FormAddNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  addNotice: PropTypes.func.isRequired,
};
