// Data
import starters from '../../constant/startes.json';
import grilledMeat from '../../constant/grilled_Meat.json';
import sideDishes from '../../constant/side_Dishes.json';
import homemadePasta from '../../constant/homemade_Pasta.json';
import sauce from '../../constant/sauces.json';
import vegetarian from '../../constant/vegetariano.json';
import milanesas from '../../constant/milanesas.json';
import sandwich from '../../constant/sandwich.json';
import desserts from '../../constant/desserts.json';


// Components
import Items from '../Items';
import Container from '../Container';

const Menu = () => {
  return (
    <Container>
      <Items data={starters} />
      <Items data={grilledMeat} />
      <Items data={sideDishes} />
      <Items data={homemadePasta} />
      <Items data={sauce} />
      <Items data={vegetarian} />
      <Items data={milanesas} />
      <Items data={sandwich} />
      <Items data={desserts} />
    </Container>
  );
};

export default Menu;
