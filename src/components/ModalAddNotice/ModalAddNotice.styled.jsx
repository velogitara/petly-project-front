import styled from '@emotion/styled';
// import { Field, Form, Formik } from 'formik';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(1, 1, 1, 0.6);
  filter: blur(20);
`;
export const Modal = styled.div`

  position: relative;
  min-width: 280px;
  margin-right: auto;
  margin-left: auto;

  padding: 40px 20px 40px 20px;
  

  border-radius: 40px;
  background-color: ${({ theme }) => theme.backgrounds.secondary};

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    position:  absolute;
    transform: translate(-50%, -50%);
     top: 50%;
    left: 50%;
    padding: 40px 80px;
    max-width: 608px;
  }
  // @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
  //   width: 458px;
  }
`;
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  // font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;

  text-align: center;
  color: #000000;
  margin: 0 0 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-weight: 600;
    font-size: 36px;
  }
`;
