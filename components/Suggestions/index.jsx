// Data
import suggestions from '../../constant/suggestions.json';

// Components
import Items from '../Items';
import Container from '../Container';

const Suggestions = () => {
  return (
    <Container>
      <Items data={suggestions} />
    </Container>
  );
};

export default Suggestions;
