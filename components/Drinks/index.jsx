// Data
import drinks from '../../constant/drinks.json';
import wine from '../../constant/wine.json';

//Components
import Items from '../Items';

const Drinks = () => {
  return (
    <>
    <Items data={drinks} />
    <Items data={wine} />
    </>
  )
}

export default Drinks