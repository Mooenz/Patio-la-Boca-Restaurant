// Data
import suggestions from '../../constant/suggestions1.json';
import invierno from '../../constant/pescado.json';

// Components
import Items from '../Items';
import Container from '../Container';

const Suggestions = () => {
  return (
    <Container>
      <Items data={suggestions} />
      <Items data={invierno} />
    </Container>
  );
};

export default Suggestions;
