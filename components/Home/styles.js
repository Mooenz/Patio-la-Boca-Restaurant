import styled from 'styled-components';
import theme from '../../constant/theme';

export const Titulo = styled.h1`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: -0.25px;
  text-align: center;
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
  gap: 40px;
`;

export const SocialMedia = styled.div`
  width: 32px;
  height: 32px;
  background-color: red;
`;