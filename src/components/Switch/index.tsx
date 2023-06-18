/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

import { SwitchCheckbox, SwitchLabel, SwitchSlider } from './styles';

interface SwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <SwitchLabel>
      <SwitchCheckbox checked={isChecked} onChange={onToggle} />
      <SwitchSlider />
    </SwitchLabel>
  );
};

export default Switch;
