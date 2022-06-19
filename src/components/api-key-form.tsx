import { useContext, useState } from 'react';
import { Stack, TextField, InputAdornment, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

import { ApiKeyContext } from '../contexts/api-key-context';

const ApiKeyForm: React.FC = () => {
  const apiKeyCtx = useContext(ApiKeyContext);
  const [apiKey, setApiKey] = useState(apiKeyCtx.apiKey);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setApiKey(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (apiKey) {
      apiKeyCtx.saveApiKey(apiKey);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1} alignItems="flex-end">
        <TextField
          label="API Key"
          fullWidth
          size="small"
          value={apiKey}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            )
          }}
        />
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default ApiKeyForm;
