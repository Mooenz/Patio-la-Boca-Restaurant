// Data
import drinks from '../../constant/drinks.json';
import wine from '../../constant/wine.json';

//Components
import Items from '../Items';
import Container from '../Container';

const Drinks = () => {
  return (
    <Container>
      <Items data={drinks} />
      <Items data={wine} />
    </Container>
  );
};

export default Drinks;
