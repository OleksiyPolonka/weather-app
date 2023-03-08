import ToggleButton from '@mui/material/ToggleButton';
import { TEMP_UNIT } from '../../../../types/temp';
import { HeaderContainer, HeaderToggle } from './styles';
import { HeaderProps } from './types';

const Header = ({ tempUnit, onTempUnitChange }: HeaderProps) => {
  const handleTempUnitChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newTempUnit: TEMP_UNIT,
  ) => {
    if (newTempUnit !== null) {
      onTempUnitChange(newTempUnit);
    }
  };

  return (
    <HeaderContainer position="static" color="transparent">
      <HeaderToggle value={tempUnit} exclusive onChange={handleTempUnitChange}>
        <ToggleButton value={TEMP_UNIT.CELSIUS}>°C</ToggleButton>
        <ToggleButton value={TEMP_UNIT.KELVIN}>°K</ToggleButton>
      </HeaderToggle>
    </HeaderContainer>
  );
};

export default Header;
