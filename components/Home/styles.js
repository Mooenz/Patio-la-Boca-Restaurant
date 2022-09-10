import styled from 'styled-components';
import theme from '../../constant/theme';

const { white } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  height: 100%;
  background-image: url('/patio-la-boca-svg.svg');
`;

export const Titulo = styled.h1`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: -0.25px;
  text-align: center;
  margin-bottom: 24px;
  color: ${white};
`;

export const Logo = styled.div`
  width: 100%;
  height: 270px;
  background: url('/logo.png') center/contain no-repeat;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  display: grid;
  place-content: center;
  height: 100%;
  width: 100%;
  padding: 25px;
`;

export const SocialMedia = styled.div`
  width: 40px;
  height: 40px;
  background: ${({name}) => name ? `url("/${name}") center/contain no-repeat` : "no-encontrado"};
  
`;
