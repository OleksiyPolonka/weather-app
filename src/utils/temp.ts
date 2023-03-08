import { TEMP_UNIT } from '../types/temp';

export const formatTemp = (tempUnit: TEMP_UNIT, temp: number) =>
  tempUnit === TEMP_UNIT.CELSIUS
    ? `${Math.ceil(convertToCelsius(temp))}°C` : `${Math.ceil(temp)}°K`;


export const convertToCelsius = (temp: number) =>
  temp - 273.15;
