import { ForecastItemData } from '../../../../api/types';
import { TEMP_UNIT } from '../../../../types/temp';

export interface ForecastGridCellProps {
  tempUnit: TEMP_UNIT;
  forecast: ForecastItemData;
}
