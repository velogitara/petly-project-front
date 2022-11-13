// import StepFirst from 'components/StepFirst/StepFirst';
import { createContext, useState } from 'react';
import { Modal, Title } from '../ModalAddNotice/ModalAddNotice.styled';
import Step from '../Step/Step';
export const FormContext = createContext();

const FormAddNotice = ({ onClose }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}>
      <Modal>
        <Title>Add pet</Title>
        <Step onClose={onClose} />
      </Modal>
    </FormContext.Provider>
  );
};
export default FormAddNotice;
