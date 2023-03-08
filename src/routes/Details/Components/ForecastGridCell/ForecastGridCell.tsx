import { format } from 'date-fns';
import { Grid, Typography } from '@mui/material';
import { formatTemp } from '../../../../utils/temp';
import { ForecastGridCellProps } from './types';
import { StyledPaper } from './styles';
import { getIconUrl } from './utils';

const ForecastGridCell = ({ forecast, tempUnit }: ForecastGridCellProps) => (
  <Grid item xs={6} md={2} key={forecast.dt}>
    <StyledPaper>
      <img
        alt={forecast.weather[0].description}
        src={getIconUrl(forecast.weather[0].icon)}
      />
      <Typography variant="h6">
        {formatTemp(tempUnit, forecast.main.temp)}
      </Typography>
      <Typography variant="subtitle1">
        {format(new Date(forecast.dt_txt), 'EEEE HH:mm')}
      </Typography>
    </StyledPaper>
  </Grid>
);

export default ForecastGridCell;
