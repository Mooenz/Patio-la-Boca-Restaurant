import styled from 'styled-components';
import theme from '../../constant/theme';

const { white, dark, primary } = theme;

export const ContainerButton = styled.section`
  position: fixed;
  top: 24px;
  right: 24px;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ stateButton }) => (stateButton ? primary : white)};
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    z-index: 1;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${dark};
    transform: ${({ stateButton }) =>
      stateButton ? 'translateX(0)' : 'translateX(25px)'};
    transition: 0.4s;
    border-radius: 50%;
    transition: all 0.5s;
  }

  &::after {
    content: ${({ stateButton }) => (stateButton ? `'ES'` : `'EN'`)};
    position: relative;
    z-index: 0;
    color: ${({ stateButton }) => (stateButton ? white : dark)};
    display: block;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: ${({ stateButton }) => (stateButton ? '70%' : '27%')};
    font-size: 16px;
    transition: all 0.5s;
  }
`;
