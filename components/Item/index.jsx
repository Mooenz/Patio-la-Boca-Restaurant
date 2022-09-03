// Style
import { ItemStyle, Price, Title } from './style';

const Item = ({ item }) => {
  return (
    <ItemStyle>
      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
    </ItemStyle>
  );
};

export default Item;
