import React from 'react';
import { InputForm } from './Input.module';

const Input = (
  {
    placeholder,
    styled,
    value,
    type, // name,  // field,  // form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    // ...props
  } // <div>
) => (
  <InputForm
    className={styled}
    placeholder={placeholder}
    type={type}
    defaultValue={value}
    // {...field}
    // {...props}
  />
  /* {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div> */
);
export default Input;

// <Input styled="inputAdd" placeholder="Email" />

// В пропс "styled" прописуєте назву потрібного інпута
// В пропс "placeholder" прописуєте текст потрібного інпута

// НАЗВИ ІНПУТІВ
// inputAuth - інпут з форми регістрації/логінізації
// inputAdd - інпут з форми AddPet
