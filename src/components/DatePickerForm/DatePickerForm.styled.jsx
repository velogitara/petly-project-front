import styled from '@emotion/styled';

export const Calendar = styled.div`
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
      transition: ${({ theme }) => theme.animations.transition};
      transform: ${({ theme }) => theme.animations.transform};
      color: ${({ theme }) => theme.palette.accent};
    }

    & .react-datepicker__year-read-view--down-arrow {
      border-color: ${({ theme }) => theme.palette.accent};

      &:hover {
        border-color: ${({ theme }) => theme.palette.accent};
      }
    }

    & .react-datepicker__year-read-view--down-arrow:hover {
      border-color: ${({ theme }) => theme.palette.accent};
    }

    & .react-datepicker__year-read-view--selected-year {
      font-size: 13px;
      color: #11111199;
    }

    & .react-datepicker__header__dropdown {
      margin-top: 2px;
    }

    & .react-datepicker__year-dropdown {
      background-color: #fdfbfa;
      border-color: #f59356bb;
    }

    & .react-datepicker__year-option:hover {
      background-color: #f59356bb;
      color: #fff;
    }

    & .react-datepicker__year-option--selected {
      color: ${({ theme }) => theme.palette.accent};
      font-weight: 700;
    }
    & .react-datepicker__year-dropdown {
      background-color: #fff;
      border: 1px solid ${({ theme }) => theme.palette.accent};
    }

    & .react-datepicker__year-option:hover {
      background-color: ${({ theme }) => theme.backgrounds.primary};
    }
  }
`;
