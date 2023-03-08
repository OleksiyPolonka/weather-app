import { API_TELEPORT_URL } from '../constants/common';
import { request } from './api';
import { City } from './types';

export const getCities = async (search = '') => {
  const queries = new URLSearchParams({
    search,
    embed: 'city:search-results/city:item'
  });
  const res = await request(`${API_TELEPORT_URL}/cities?${queries}`);
  const cities: City[] = res._embedded['city:search-results'];

  return cities;
}
