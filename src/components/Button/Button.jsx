import React from 'react';
import { Btn } from '../../helpers/common-styles/Button.styled';

const Button = ({ title, styled, type, margin, onSubmit, onClick }) => {
  return (
    <Btn
      className={styled}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      style={{ margin: margin }}
    >
      {title}
    </Btn>
  );
};

export default Button;

// <Button styled="formAuth on" title="Login" margin="0 0 16px 0" />

// В пропс "styled" прописуєте назву потрібної кнопки
// В пропс "title" прописуєте текст потрібної кнопки
// В пропс "type" прописуєте тип потрібної кнопки
// В пропс "margin" прописуєте відступи потрібної кнопки

// НАЗВИ КНОПОК
// add - кнопка кругла "додати"
// formAuth on - кнопка "далі" в формі авторизації
// formAuth back - кнопка "назад" в формі авторизації
// formAddPet - кнопка в формі "Add pet"
// active - активна кнопка

