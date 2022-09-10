// Styles
import {
  Container,
  Link,
  Logo,
  SocialMedia,
  ContainerSocialMedia,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Logo></Logo>
      <ContainerSocialMedia>
        <Link href="https://www.instagram.com/patio.laboca/">
          <SocialMedia name={'instagram.svg'}></SocialMedia>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Cantina+Patio+La+Boca/@-34.6393215,-58.3642379,15z/data=!4m5!3m4!1s0x0:0xb067366ccb44f828!8m2!3d-34.6393215!4d-58.3642379 
"
        >
          <SocialMedia name={'location.svg'}></SocialMedia>
        </Link>
        <Link
          Link
          href="https://api.whatsapp.com/send?phone=5491139542225&text=Hola!%20me%20contacto%20por%20una%20reserva%20o%20consulta%20respecto%20a%20Cantina%20Patio%20La%20Boca%20%F0%9F%8D%B7%F0%9F%8D%96%F0%9F%98%8B 
"
        >
          <SocialMedia name={'whatsapp.svg'}></SocialMedia>
        </Link>
      </ContainerSocialMedia>
    </Container>
  );
};

export default Home;
