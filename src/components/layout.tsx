import { PropsWithChildren } from 'react';
import { Box, Grid } from '@mui/material';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Box m={2} maxWidth="800px">
        {children}
      </Box>
    </Grid>
  );
};

export default Layout;
