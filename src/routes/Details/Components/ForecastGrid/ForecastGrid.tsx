import { Grid } from '@mui/material';
import ForecastGridCell from '../ForecastGridCell';
import { ForecastGridProps } from './types';

const ForecastGrid = ({ forecastData, tempUnit }: ForecastGridProps) => {
  return (
    <Grid container spacing={3}>
      {forecastData.map((forecast) => (
        <ForecastGridCell
          key={forecast.dt}
          tempUnit={tempUnit}
          forecast={forecast}
        />
      ))}
    </Grid>
  );
};

export default ForecastGrid;
