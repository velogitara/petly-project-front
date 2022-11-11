import {Item, Title, Text, Date, ReadMore, Wrapper} from './NewsItem.styled';

const NewsItem = ({title, url, description, date}) => {
  return <Item>
    {/*<Title>{title}</Title>*/}
    {/*<Text>{description}</Text>*/}
    <Title text={title} length={35}/>
    <Text text={description} length={250}/>
    <Wrapper>
      <Date>{date}</Date>
      <ReadMore href={url} target="_blank">Read more</ReadMore>
    </Wrapper>
  </Item>
}
// length={35}
// length={250}
export default NewsItem;
