// import PropTypes from 'prop-types';
// import { Item, Title, Text, Date, ReadMore, Wrapper } from './NewsItem.styled';
// import { theme } from 'helpers';

// const NewsItem = ({ title, url, description, date }) => {
//   const viewportWidth = window.innerWidth;
//   const toTablet = Number(theme.screens.toTablet.replace(/[^0-9]/g, ''));
//   const toDesktop = Number(theme.screens.toDesktop.replace(/[^0-9]/g, ''));
//   let titleLength = null;
//   let textLength = null;

//   if (viewportWidth <= toTablet) {
//     titleLength = 35;
//     textLength = 265;
//   } else if (viewportWidth > toTablet && viewportWidth <= toDesktop) {
//     titleLength = 40;
//     textLength = 295;
//   } else {
//     titleLength = 50;
//     textLength = 315;
//   }

//   return <Item>
//     <Title text={title} length={titleLength}/>
//     <Text text={description} length={textLength}/>
//     <Wrapper>
//       <Date>{date}</Date>
//       <ReadMore href={url} target="_blank">Read more</ReadMore>
//     </Wrapper>
//   </Item>
// }

// export default NewsItem;

// NewsItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   date: PropTypes.string
// }
