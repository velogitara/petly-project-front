import React from 'react';
import { InputForm } from './Input.styled';

const Input = ({ placeholder, styled, value, margin, type, name, as, rows, resize }) => {
  return (
    <InputForm
      className={styled}
      placeholder={placeholder}
      value={value}
      style={{ margin: margin }}
      type={type}
      name={name}
      as={as}
      rows={rows}
      resize={resize}
    />
  );
};

export default Input;

// <Input styled="inputAuth" placeholder="Email" margin="0 0 16px 0" />
// В пропс "placeholder" прописуєте текст потрібного inputa
// В пропс "margin" прописуєте відступи потрібного inputa
// В пропс "value" прописуєте значення потрібного інпута

// В пропс "styled" прописуєте назву потрібного інпута
// В пропс "placeholder" прописуєте текст потрібного інпута

// НАЗВИ ІНПУТІВ
// inputAuth - інпут з форми регістрації/логінізації
// inputAdd - інпут з форми AddPet
