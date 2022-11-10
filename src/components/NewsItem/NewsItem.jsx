import EllipsisText from "react-ellipsis-text";
import {Item, Title, Text, Image} from './NewsItem.styled';
import img from '../../assets/news-item-gradient-line.png'

const NewsItem = ({title, url, description, date}) => {
  return <Item>
    <Image src={img}></Image>
    <Title text={title} length={40}/>
    <Text text={description} length={150}/>
    <div>
      <span>{date}</span>
      <a href={url} target="_blank">Read more</a>
    </div>
  </Item>
}

export default NewsItem;
