import styled from 'styled-components';
import theme from '../../constant/theme';

const { primary } = theme;

export const Title = styled.h2`
  margin: 0 0 18px;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: ${primary};
  text-transform: capitalize;
  padding: 0 12px;
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: 100%;
  background-repeat: no-repeat;
  background-image: ${({ bg }) => `url("${bg}")`};
  margin-bottom: 24px;
`;