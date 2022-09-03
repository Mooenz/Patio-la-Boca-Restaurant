// Data
import suggestions from '../../constant/suggestions.json';

// Components
import Items from '../Items';

const Suggestions = () => {
  return (
    <>
      <Items data={suggestions} />
    </>
  );
};

export default Suggestions;
