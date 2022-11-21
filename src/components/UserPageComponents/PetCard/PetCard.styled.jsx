import styled from '@emotion/styled';
import DeleteButton from 'components/DeleteButton';

export const PetContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  color: inherit;
  background: ${({ theme }) => theme.palette.triadic};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    border-radius: 40px;
  }
`;

export const PetImageContainer = styled.div`
  width: 240px;
  height: 240px;
  background-color: grey;
  border-radius: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    border-radius: 40px;
    max-width: 161px;
    height: 161px;
    margin-bottom: 0;
    margin-right: 32px;
  }

  & > img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const PetInfo = styled.div`
  width: fit-content;
`;

export const PetField = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &.delete {
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    font-weight: 400;
    font-size: 16px;
  }
`;

export const PetDelete = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 12px;
`;

// export const PetDeleteButton = styled(DeleteButton)`
//   && {
//     @media screen and (max-width: ${({ theme }) => theme.screens.toTablet}) {
//       width: 20px;
//       height: 20px;
//     }

//     @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
//       position: absolute;
//       right: 0;
//     }
//   }
// `;
