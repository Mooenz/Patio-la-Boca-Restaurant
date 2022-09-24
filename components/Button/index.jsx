import { useContext } from 'react';

// Styles
import { ContainerButton, Switch, Slider } from './styles';

// Context
import { ShowContext } from '../../context/ShowContext';

const Index = () => {
  const { language, setLanguage } = useContext(ShowContext);

  const handleLang = (event) => {
    event.preventDefault();
    setLanguage(!language);
  };

  return (
    <ContainerButton onClick={handleLang}>
      <Switch>
        <Slider stateButton={language} />
      </Switch>
    </ContainerButton>
  );
};

export default Index;
