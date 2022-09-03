import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';

// Components
import Home from '../Home';
import Menu from '../Menu';
import Drinks from '../Drinks';
import Suggestions from '../Suggestions';

// Styles
import { Container } from './styles.js';

const Show = () => {
  const { show } = useContext(ShowContext);

  return (
    <Container>
      {show === 'Inicio' && <Home />}
      {show === 'Home' && <Home />}
      {show === 'Menú' && <Menu />}
      {show === 'Menu' && <Menu />}
      {show === 'Bebidas' && <Drinks />}
      {show === 'Drinks' && <Drinks />}
      {show === 'Sugerencias' && <Suggestions />}
      {show === 'Suggestion' && <Suggestions />}
    </Container>
  );
};

export default Show;
