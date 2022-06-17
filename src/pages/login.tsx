import { Stack, TextField, InputAdornment, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

import LoginExplanation from '../components/login-explanation';

import Title from '../components/title';

const Login: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Title />
      <LoginExplanation />
      <Stack spacing={1} alignItems="flex-end">
        <TextField
          label="API key"
          fullWidth
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            )
          }}
        />
        <Button variant="contained" color="success">
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
