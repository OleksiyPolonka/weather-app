import { useMemo } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { format } from 'date-fns';

import { CurrentWeatherProps } from './types';
import { formatTemp } from '../../../../utils/temp';

const CurrentWeather = ({ data, city, tempUnit }: CurrentWeatherProps) => {
  const temp = useMemo(
    () => ({
      main: formatTemp(tempUnit, data.main.temp),
      minTemp: formatTemp(tempUnit, data.main.temp_min),
      maxTemp: formatTemp(tempUnit, data.main.temp_max),
    }),
    [tempUnit, data.main.temp, data.main.temp_min, data.main.temp_max],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          padding: 1,
        },
      }}
    >
      <Paper>
        <Grid container direction="column" alignItems="center">
          <Grid container wrap="nowrap" alignItems="center">
            <Grid container direction="column">
              <Typography variant="h5" component="h5">
                {city.name}
              </Typography>
              <Typography variant="body1">
                {format(new Date(data.dt_txt), 'h:mm a')}
              </Typography>
            </Grid>
            <img
              width="50"
              src="https://openweathermap.org/img/wn/10d@2x.png"
            />
          </Grid>

          <Grid item>
            <Typography variant="h3" component="h3">
              {temp.main}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              {data.weather[0].description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              H: {temp.maxTemp}; L: {temp.minTemp}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
export default CurrentWeather;
