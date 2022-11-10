import styled from '@emotion/styled';
import EllipsisText from "react-ellipsis-text";


const Item = styled.li`
  display: grid;
  width: 280px;
  height: 286px;
  //align-items: center;
  font-size: 16px;
  :not(:last-child) {
      margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 266px;
  }
`
const Image = styled.img`
  width: 200px;
  height: 4px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 340px;
    height: 8px;

  }

`

const Title = styled(EllipsisText)`
  font-size: 24px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1280px) {
;

  }
`

const Text = styled(EllipsisText)`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {


  }

`


export {Item, Title, Text, Image};
