import styled from '@emotion/styled';

export const Calendar = styled.div`
  // padding: 10px;
  // background-color: #fdf7f2;
  // color: #fff;

  & .react-datepicker {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    // background-color: ${({ theme }) => theme.backgrounds.primary};
    background-color: ${({ theme }) => theme.palette.triadic};

    color: ${({ theme }) => theme.palette.primary};
    border: 1px solid ${({ theme }) => theme.backgrounds.primary};
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;

    & .react-datepicker__navigation-icon::before {
      border-color: ${({ theme }) => theme.palette.accent};
    }
    & .react-datepicker__header {
      background-color: ${({ theme }) => theme.backgrounds.primary};
      border-bottom: 1px solid ${({ theme }) => theme.backgrounds.primary};
    }

    & .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
      background-color: ${({ theme }) => theme.palette.accent};
    }

    & .react-datepicker__day:hover {
      background-color: ${({ theme }) => theme.backgrounds.primary};
    }
  }
`;
