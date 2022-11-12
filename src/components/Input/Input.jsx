import React from 'react';
import { InputForm } from './Input.module';

const Input = ({ placeholder, styled }) => {
  return <InputForm className={styled} placeholder={placeholder} type="text" />;
};

export default Input;

// <Input styled="inputAdd" placeholder="Email" />

// В пропс "styled" прописуєте назву потрібного інпута
// В пропс "placeholder" прописуєте текст потрібного інпута

// НАЗВИ ІНПУТІВ
// inputAuth - інпут з форми регістрації/логінізації
// inputAdd - інпут з форми AddPet
