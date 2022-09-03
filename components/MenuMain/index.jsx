import { useContext } from 'react';
import { ShowContext } from '../../context/ShowContext';

// Styles
import { Container, List, Item, Icon, Title } from './styles.js';

// Data
import menu from '../../constant/menu.json';

const MenuMain = () => {
  const { setShow } = useContext(ShowContext);

  const sectionShow = (section) => {
    setShow(section);
  };

  return (
    <Container>
      <List>
        {menu.map(({ title, image, id }) => (
          <Item key={id} onClick={() => sectionShow(title)}>
            <Icon icon={image} />
            <Title>{title}</Title>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default MenuMain;
