import { styled } from 'styled-components';

const SwitchCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 26px;

  &:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    border-radius: 13px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  border-radius: 13px;
  height: 20px;
  ${SwitchCheckbox}:checked + ${SwitchSlider} {
    background-color: ${({ theme }) => theme.COLORS.GREEN_30};
  }
  ${SwitchCheckbox}:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.COLORS.GREEN_30};
  }
  ${SwitchCheckbox}:checked + ${SwitchSlider}:before {
    transform: translateX(26px);
  }
`;

export { SwitchCheckbox, SwitchLabel, SwitchSlider };
