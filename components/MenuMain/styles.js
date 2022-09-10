import styled from 'styled-components';
import theme from '../../constant/theme';

const { light, secondary, tertiary } = theme;

export const Container = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 12px;
  width: 100%;
  background-color: ${tertiary};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 350px;
  margin: auto;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: 100%;
  padding: 8px;
  cursor: pointer;
  background-color:  ${({ active }) => active && secondary};
`;
export const Icon = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  background: ${({ icon }) => `url(${icon}.svg) center/contain no-repeat`};
`;

export const Title = styled.p`
  position: relative;
  font-size: 12px;
  line-height: 12px;
  color: ${light};

  &::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
  }
`;
