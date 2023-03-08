import { API_FORECAST_URL } from '../constants/common';
import { request } from './api';
import { ForecastResponse } from './types';

export const getCityWeather = async (cityId: string = ''): Promise<ForecastResponse> => {  
  const queries = new URLSearchParams({
    APPID: import.meta.env.VITE_OPEN_WEATHER_KEY,
    q: cityId
  })
  
  const res = await request(`${API_FORECAST_URL}?${queries}`);

  return res;
}
