import { ForecastItemData } from '../../../../api/types';
import { TEMP_UNIT } from '../../../../types/temp';

export interface ForecastGridProps {
  tempUnit: TEMP_UNIT;
  forecastData: ForecastItemData[];
};
