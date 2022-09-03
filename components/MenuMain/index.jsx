import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';

// Styles
import { Container, List, Item, Icon, Title } from './styles.js';

// Data
import menu from '../../constant/menu.json';

const MenuMain = () => {
  const { show, setShow, language } = useContext(ShowContext);

  const sectionShow = (section) => {
    setShow(section);
  };

  return (
    <Container>
      <List>
        {language === 'es'
          ? menu.es.map(({ title, image, id }) => (
              <Item
                key={id}
                active={title === show}
                onClick={() => sectionShow(title)}
              >
                <Icon icon={image} />
                <Title>{title}</Title>
              </Item>
            ))
          : menu.en.map(({ title, image, id }) => (
              <Item
                key={id}
                active={title === show}
                onClick={() => sectionShow(title)}
              >
                <Icon icon={image} />
                <Title>{title}</Title>
              </Item>
            ))}
      </List>
    </Container>
  );
};

export default MenuMain;
