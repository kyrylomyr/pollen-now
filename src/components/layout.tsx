import { PropsWithChildren } from 'react';

import { Box, Grid } from '@mui/material';

const childrenStyle = { m: 2, maxWidth: '800px' };

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Box sx={childrenStyle}>{children}</Box>
    </Grid>
  );
};

export default Layout;
