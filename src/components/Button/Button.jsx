import React from 'react';
import { Btn } from './Button.styled';

const Button = ({ title, styled, type }) => {
  return (
    <Btn className={styled} type={type}>
      {title}
    </Btn>
  );
};

export default Button;

// <Button styled="formAddPet" title="accaunt" />

// В пропс "styled" прописуєте назву потрібної кнопки
// В пропс "title" прописуєте текст потрібної кнопки

// НАЗВИ КНОПОК
// accaunt - кнопка в хедері
// headerAuth-filter - кнопка в фільтрі, а також в хедері login i registration
// learnMore - кнопка в картці тварини
// add - кнопка кругла "додати"
// formAuth - кнопка в формі авторизації
// formAddPet - кнопка в формі "Add pet"
// active - активна кнопка
