import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  height: 60,
  color: '#fff',
  background: '#363636',
  lineHeight: '60px',
  margin: '10px 0',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  padding: '0 8px',
  textOverflow: 'ellipsis',
}));
