import { useContext, useState } from 'react';
import { Stack, TextField, InputAdornment, Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';

import { ApiKeyContext } from '../contexts/api-key-context';

const ApiKeyForm: React.FC = () => {
  const apiKeyCtx = useContext(ApiKeyContext);
  const [apiKey, setApiKey] = useState<string>(apiKeyCtx.apiKey);
  const [error, setError] = useState<string>('');
  const [alreadySubmitted, setAlreadySubmitted] = useState<boolean>(!!apiKeyCtx.apiKey);

  const validate = (value: string): boolean => {
    if (!value) {
      setError('API Key is required');
      return false;
    }

    setError('');
    return true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setApiKey(event.target.value);
    validate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setAlreadySubmitted(true);

    if (validate(apiKey)) {
      apiKeyCtx.saveApiKey(apiKey);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1} alignItems="flex-end">
        <TextField
          error={alreadySubmitted && !!error}
          helperText={alreadySubmitted && error}
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
        <Button type="submit" variant="contained" color="success" disabled={!apiKey}>
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default ApiKeyForm;
