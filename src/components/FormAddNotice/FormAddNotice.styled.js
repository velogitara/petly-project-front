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
  line-height: 1.4;
  outline: none;
  padding: 11px 14px;
  width: 100%;
  font-size: 14px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    padding: 11px 16px;
    width: 100%;
    font-size: 16px;

    &.comment {
      padding: 16px 0px 70px 18px;
      margin: 0;
      // height: 113px;
    }
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.35;

    color: rgba(27, 27, 27, 0.6);

    @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
      font-size: 16px;
      line-height: 1.63;
    }
  }
`;
export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.palette.primary};

  transition: ${({ theme }) => theme.animations.transition};
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 6.8px 0;

  border: 2px solid transparent;
  border-radius: 40px;
  cursor: pointer;

  &.formAddPet {
    background-color: ${({ theme }) => theme.palette.triadic};
    border: 2px solid ${({ theme }) => theme.palette.accent};
  }
  &.activeDone,
  &.activeNext {
    margin: 40px 0 12px 0;
    background: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.triadic};
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 180px;
    height: 44px;
    font-size: 20px;
    line-height: 1.35;
    padding: 9px 0;

    &.formAddPet {
      margin-left: 34px;
    }

    &.activeDone,
    &.activeNext {
      position: absolute;
      bottom: 40px;
      right: 114px;
      margin: 0;
    }
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.38;
  text-align: center;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 20px;
    line-height: 1.35;

    margin-bottom: 28px;
  }
`;

export const CategoryBox = styled.ul`
  margin-bottom: 32px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 28px;
  }
`;
export const InputBox = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 28px;
    &.label {
      margin-bottom: 0;
    }
  }
`;
export const Label = styled.label`
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.1;
    margin-bottom: 12px;

    &.second-step-margin-title {
      margin-top: 40px;
    }
  }
`;

export const ButtonBox = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.palette.accent};
`;
export const BoxLabel = styled.div`
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 12px;
  }
`;

export const Radio = styled.input`
  opacity: 0;
`;

export const LabelRadio = styled.label`
  font-size: 14px;
  display: inline-block;
  border-radius: 40px;
  outline: 2px solid ${({ theme }) => theme.palette.accent};

  padding: 8px 28px;

  &.active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.triadic};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 20px;
    line-height: 1.35;

    padding: 10px 28px;
  }
`;
export const GenderBox = styled.div`
  display: flex;
  margin: 16px 0 32px 0;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin: 28px 0 40px 0;
  }
`;

export const IconBox = styled.div`
  margin-bottom: 12px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 20px;
  }
`;
export const IconFile = styled.svg`
  width: 71px;
  height: 71px;
  stroke: rgba(17, 17, 17, 0.6);
`;

export const Figure = styled.figure`
  width: 116px;
  height: 116px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgrounds.primary};
  display: block;
  padding: 22px 23px 23px 22px;
  margin: 0;
`;
export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
export const LabelIcon = styled.label`
  font-size: 18px;
  line-height: 1.44;

  &:first-of-type {
    margin-right: 40px;
  }

  &.active,
  &:hover {
    color: ${({ theme }) => theme.palette.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-size: 18px;
    line-height: 1.3;
  }
`;

export const IconMale = styled.svg`
  fill: #23c2ef;
  filter: inset -1px 2px 3px rgba(255, 255, 255, 0.57), inset 0px -3px 4px rgba(0, 0, 0, 0.25);
  width: 40px;
  height: 40px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 60px;
    height: 60px;
  }
`;

export const IconFemale = styled.svg`
  fill: #ff8787;
  width: 40px;
  height: 40px;
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    width: 60px;
    height: 60px;
  }
`;

export const CategoryItem = styled.li`
  display: inline-block;
  margin: 0 0 12px 0;

  &:nth-of-type(1) {
    margin: 0 8px 12px 0;
  }

  &:nth-of-type(4) {
    margin-bottom: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin: 0;

    &:nth-of-type(-n + 3) {
      margin-right: 12px;
    }
    &:nth-of-type(-n + 1) {
      margin-bottom: 16px;
    }
  }
`;
