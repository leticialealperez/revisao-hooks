import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const MeuGrid = styled(Grid)(() => ({
  height: '100vh',
  flexGrow: 1,

  Box: {
    paddingBottom: '20px'
  }
}));

export { MeuGrid }