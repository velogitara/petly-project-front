import styled from '@emotion/styled';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 36px;
    margin-right: -84px;
  }
`;

export const ImageContainer = styled.div`
  width: 233px;
  height: 233px;
  margin-bottom: 12px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.backgrounds.backdrop};
  border-radius: 50%;

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    margin-bottom: 0;
  }
`;

export const UserPicture = styled.picture`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageLabel = styled.label`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.desktop}) {
    transform: translateX(-12px);
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 4px;

  fill: ${({ theme }) => theme.palette.accent};
`;

export const InputText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.83;
`;

export const ErrorMessageInput = styled.div`
  color: ${({ theme }) => theme.palette.accent};
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
`;
