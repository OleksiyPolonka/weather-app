import { TEMP_UNIT } from '../../../../types/temp';

export interface HeaderProps {
  tempUnit: TEMP_UNIT;
  onTempUnitChange: (tempUnit: TEMP_UNIT) => void;
};

export type handleTempUnitChangeProps = {
  newTempUnit: TEMP_UNIT;
  event: React.MouseEvent<HTMLElement, MouseEvent>;
}
