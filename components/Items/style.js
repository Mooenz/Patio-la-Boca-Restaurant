import styled from 'styled-components';
import theme from '../../constant/theme';

const { primary } = theme;

export const Title = styled.h2`
  margin: 0 0 24px;
  padding: 0 12px;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: ${primary};
  text-transform: capitalize;
`;
