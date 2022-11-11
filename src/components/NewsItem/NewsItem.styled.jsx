import styled from '@emotion/styled';
import EllipsisText from "react-ellipsis-text";
import { theme } from '../../helpers';

const Item = styled.li`
  display: block;
  font-size: 16px;
  height: 308px;

  ::before{
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background-image: ${theme.backgrounds.gradient};
  }

  @media screen and (min-width: ${theme.screens.tablet}) {

    height: 288px;

    ::before{
      width: 280px;
      height: 8px;
    }
  }

  @media screen and (min-width: ${theme.screens.desktop}) {
    height: 266px;

    ::before{
      width: 340px;
      height: 8px;
    }
  }
`

const Title = styled(EllipsisText)`
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.screens.tablet}) {

  }

  @media screen and (min-width: ${theme.screens.desktop}) {


  }
`

// const Title = styled.h3`
//   //display: block;
//   font-size: 24px;
//   font-weight: 700;
//   margin-bottom: 16px;
//
//
//   width: 280px;
//   height: 66px;
//
//   overflow: hidden;
//   text-overflow: ellipsis;
//
//   @media screen and (min-width: 768px) {
//
//   }
//
//   @media screen and (min-width: 1280px) {
//
//
//   }
// `
//
// const Text = styled.p`
//   width: 280px;
//   height: 154px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   margin-bottom: 20px;
//
//   @media screen and (min-width: 768px) {
//     margin-bottom: 40px;
//   }
//
//   @media screen and (min-width: 1280px) {
//
//
//   }
//
// `
const Text = styled(EllipsisText)`
  display: block;
  margin-bottom: 20px;

  @media screen and (min-width: ${theme.screens.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${theme.screens.desktop}) {


  }

`

const Date = styled.span`
  opacity: 0.6;
`

const ReadMore = styled.a`
color: ${theme.palette.accent};
`
const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-auto-flow: column;
`

export {Item, Title, Text, Date, ReadMore, Wrapper};
