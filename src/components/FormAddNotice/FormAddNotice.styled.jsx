import styled from '@emotion/styled';

export const Form = styled.form`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary};
`;
export const Input = styled.input`
  background: ${({ theme }) => theme.backgrounds.primary};
  border: 1px solid rgba(245, 146, 86, 0.5);
  // ${({ theme }) => theme.palette.accent};
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.4;
  outline: none;

  &.inputAdd {
    padding: 11px 14px;
    width: 240px;
    font-size: 14px;
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 11px 16px;
      width: 448px;
      font-size: 16px;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  line-height: 1.4;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: ${({ theme }) => theme.animations.transition};
  margin-top: 40px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    height: 44px;
    font-size: 20px;

    line-height: 1.35;
  }

  &.formAddPet {
    background-color: ${({ theme }) => theme.palette.triadic};
    border: 2px solid ${({ theme }) => theme.palette.accent};
    padding: 8.5px auto;
    width: 240px;
    font-size: 16px;
    // &:hover {
    //   background: ${({ theme }) => theme.palette.accent};
    //   color: ${({ theme }) => theme.palette.triadic};
    // }
    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      margin-right: 20px;
      width: 180px;
    }
  }

  &.active {
    background: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.triadic};

    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      width: 180px;
    }
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.38;
  text-align: center;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 16px;
    line-height: 1.36;

    margin-bottom: 28px;
  }
`;

export const CategoryBox = styled.div`
  margin-bottom: 32px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 28px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 8px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Radio = styled.input`
  display: none;
`;

export const IconMale = styled.svg`
  fill: #23c2ef;
  box-shadow: inset -1px 2px 3px rgba(255, 255, 255, 0.57), inset 0px -3px 4px rgba(0, 0, 0, 0.25);
  width: 54px;
  height: 54px;
`;
