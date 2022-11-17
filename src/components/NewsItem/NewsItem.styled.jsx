import styled from '@emotion/styled';
import EllipsisText from "react-ellipsis-text";
import { theme } from '../../helpers';

const Item = styled.li`
  display: block;
  font-size: 16px;
  height: 308px;
  margin-top: 40px;

  ::before{
    content: "";
    display: block;
    width: 200px;
    height: 4px;
    background-image: ${theme.backgrounds.gradient};
    border-radius: 40px;
    margin-bottom: 4px;
  }

  @media screen and (min-width: ${theme.screens.tablet}) {
    margin-top: 60px;
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
`

const Text = styled(EllipsisText)`
  display: block;
  margin-bottom: 20px;

  @media screen and (min-width: ${theme.screens.tablet}) {
    margin-bottom: 40px;
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
