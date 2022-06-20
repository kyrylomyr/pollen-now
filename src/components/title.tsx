import { Box, Stack, Typography } from '@mui/material';

import logo from '../assets/logo.png';

const Title: React.FC = () => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
      <Box component="img" src={logo} alt="Logo" height="36px" />
      <Typography variant="h4">Pollen Now</Typography>
    </Stack>
  );
};

export default Title;
