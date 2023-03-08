import { NavLink } from 'react-router-dom';
import { CityPanelProps } from './types';
import { Tooltip } from '@mui/material';
import { Item } from './style';

const CityPanel = ({ city }: CityPanelProps) => (
  <Tooltip placement="right" title={city._embedded['city:item'].full_name}>
    <NavLink to={`/details/${city._embedded['city:item'].name}`}>
      <Item>{city._embedded['city:item'].full_name}</Item>
    </NavLink>
  </Tooltip>
);

export default CityPanel;
