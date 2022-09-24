import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';

// Components
import Item from '../Item';

// Styles
import { Title, Image } from './style';

const Items = ({ data }) => {
  const { language } = useContext(ShowContext);
  
  return (
    <div>
      {<Image bg={data.es.image} alt={data.es.image} />}
      {language ? <Title>{data.es.name}</Title> : <Title>{data.en.name}</Title>}
      <ul>
        {language
          ? data.es.items.map((item) => (
              <Item key={item.id} item={item} image={data.es.image} />
            ))
          : data.en.items.map((item) => (
              <Item key={item.id} item={item} image={data.en.image} />
            ))}
      </ul>
    </div>
  );
};

export default Items;
