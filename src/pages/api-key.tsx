import { useContext } from 'react';
import { Stack, TextField, InputAdornment, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

import { ApiKeyContext } from '../contexts/api-key-context';
import Title from '../components/title';
import ApiKeyExplanation from '../components/api-key-explanation';

const ApiKey: React.FC = () => {
  const apiKeyCtx = useContext(ApiKeyContext);

  return (
    <Stack spacing={3}>
      <Title />
      <ApiKeyExplanation />
      <Stack spacing={1} alignItems="flex-end">
        <TextField
          label="API key"
          fullWidth
          size="small"
          value={apiKeyCtx.apiKey}
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
