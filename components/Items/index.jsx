import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';

// Components
import Item from '../Item';

// Styles
import { Title } from './style';

const Items = ({ data }) => {
  const { language } = useContext(ShowContext);

  return (
    <>
      {language === 'es' && <Title>{data.es.name}</Title>}
      {language === 'en' && <Title>{data.en.name}</Title>}
      <ul>
        {language === 'es' &&
          data.es.items.map((item) => <Item key={item.id} item={item} />)}

        {language === 'en' &&
          data.en.items.map((item) => <Item key={item.id} item={item} />)}
      </ul>
    </>
  );
};

export default Items;
