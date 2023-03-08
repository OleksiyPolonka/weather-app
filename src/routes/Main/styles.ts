import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const SideBarGrid = styled(Grid)(({ theme }) => ({
  height: '100vh',
  overflow: 'auto',
  paddingTop: '16px',
  padding: theme.spacing(4),
  boxShadow: '2px 0px 5px 0px rgba(0,0,0,0.75)',
}));

export const CitiesContainers = styled(Grid)(() => ({
  overflow: 'auto',
  maxHeight: '90%',
  marginTop: '16px',
}));
