import React, { useContext } from 'react';
import { FormContext } from '../FormAddNotice/FormAddNotice';
import StepFirst from 'components/StepFirst/StepFirst';
import StepSecond from 'components/StepSecond/StepSecond';

function Step({ onClose }) {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <StepFirst onClose={onClose} />;
      break;
    case 1:
      stepContent = <StepSecond />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
