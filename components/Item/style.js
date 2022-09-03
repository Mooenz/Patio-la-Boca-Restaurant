import styled from 'styled-components';
import theme from '../../constant/theme';

const { secondary } = theme;

export const ItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgb(168 88 1 / 20%);
  }
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

export const Price = styled.span`
  font-weight: 700;
  color: ${secondary};
`;
