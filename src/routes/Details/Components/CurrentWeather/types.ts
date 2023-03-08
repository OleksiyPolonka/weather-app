import { ForecastCity, ForecastItemData } from '../../../../api/types';
import { TEMP_UNIT } from '../../../../types/temp';

export interface CurrentWeatherProps {
  data: ForecastItemData;
  city: ForecastCity;
  tempUnit: TEMP_UNIT;
}