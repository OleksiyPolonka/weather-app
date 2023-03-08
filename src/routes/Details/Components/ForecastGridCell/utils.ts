import { API_FORECAST_IMG_URL } from '../../../../constants/common';

export const getIconUrl = (icon: string) =>
  `${API_FORECAST_IMG_URL}${icon}.png`;