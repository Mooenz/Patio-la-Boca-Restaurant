import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';

// Components
import Home from '../Home';
import Menu from '../Menu';
import Drinks from '../Drinks';
import Suggestions from '../Suggestions';

const Show = () => {
  const { show } = useContext(ShowContext);

  return (
    <>
      {show === 'Inicio' && <Home />}
      {show === 'Home' && <Home />}
      {show === 'Sugerencias' && <Suggestions />}
      {show === 'Suggestion' && <Suggestions />}
      {show === 'Menú' && <Menu />}
      {show === 'Menu' && <Menu />}
      {show === 'Bebidas' && <Drinks />}
      {show === 'Drinks' && <Drinks />}
    </>
  );
};

export default Show;
