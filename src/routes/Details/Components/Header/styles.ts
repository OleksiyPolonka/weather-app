import { AppBar, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderContainer = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  padding: theme.spacing(1),
}));

export const HeaderToggle = styled(ToggleButtonGroup)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '& .MuiToggleButton-root': {
    color: 'rgba(255, 255, 255, 0.87)',
    padding: theme.spacing(1),

    '&.Mui-selected': {
      color: '#fff',
    },
  },
}));
