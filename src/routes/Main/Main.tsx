import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CityPanel from './Components/CityPanel';
import { City } from '../../api/types';
import SearchComponent from './Components/SearchField';
import { Typography } from '@mui/material';
import { getCities } from '../../api/teleport';
import { Outlet, useParams } from 'react-router-dom';
import { SideBarGrid, CitiesContainers } from './styles';

const Main = () => {
  const [data, setData] = useState<City[] | null>(null);
  const { cityId } = useParams();
  const [searchField, setSearchField] = useState(cityId || '');

  useEffect(() => {
    (async () => {
      if (searchField) {
        const res = await getCities(searchField);
        setData(res);
      } else {
        setData(null);
      }
    })();
  }, [searchField]);

  const onSearch = (newSearch: string) => setSearchField(newSearch);

  return (
    <Grid container>
      <SideBarGrid item md={3} xs={3} width="100vw" alignItems="center">
        <Grid item>
          <SearchComponent searchField={searchField} onSearch={onSearch} />
        </Grid>
        <CitiesContainers item>
          {data && !!data.length ? (
            data.map((el, i) => <CityPanel city={el} key={i} />)
          ) : (
            <Typography>
              Please, enter the city name in the search bar...
            </Typography>
          )}
        </CitiesContainers>
      </SideBarGrid>
      <Grid item md={9} xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Main;
