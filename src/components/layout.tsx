import { PropsWithChildren } from 'react';

import { Box } from '@mui/material';

const boxStyle = { maxWidth: '500px' };

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={boxStyle}>{children}</Box>;
};

export default Layout;
