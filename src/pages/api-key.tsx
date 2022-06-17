import { Stack, TextField, InputAdornment, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

import ApiKeyExplanation from '../components/api-key-explanation';

import Title from '../components/title';

const ApiKey: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Title />
      <ApiKeyExplanation />
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

export default ApiKey;
