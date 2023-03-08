import { useLoaderData } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CurrentWeather from './Components/CurrentWeather';
import ForecastGrid from './Components/ForecastGrid';
import Header from './Components/Header';
import { useState } from 'react';
import { TEMP_UNIT } from '../../types/temp';
import { ForecastItemData, ForecastResponse } from '../../api/types';
import { ForecastGridContainer } from './styles';

const Details = () => {
  const data = useLoaderData() as ForecastResponse;
  const [tempUnit, setTempUnit] = useState(TEMP_UNIT.CELSIUS);
  const onTempUnitChange = (newTempUnit: TEMP_UNIT) => {
    setTempUnit(newTempUnit);
  };

  return (
    <>
      <Header tempUnit={tempUnit} onTempUnitChange={onTempUnitChange} />
      <Grid container justifyContent="center">
        <Grid item>
          <CurrentWeather
            city={data.city}
            tempUnit={tempUnit}
            data={[...data.list].shift() as ForecastItemData}
          />
        </Grid>
        <ForecastGridContainer item>
          <ForecastGrid
            tempUnit={tempUnit}
            forecastData={[...data.list].splice(1)}
          />
        </ForecastGridContainer>
      </Grid>
    </>
  );
};

export default Details;
