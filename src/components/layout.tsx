import { PropsWithChildren } from 'react';
import { Box, Grid } from '@mui/material';

import Credits from './credits';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Box m={2} maxWidth="800px">
        {children}
      </Box>
      <Credits />
    </Grid>
  );
};

export default Layout;
