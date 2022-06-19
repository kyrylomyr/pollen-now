import { Stack } from '@mui/material';

import Title from '../components/title';
import ApiKeyExplanation from '../components/api-key-explanation';
import ApiKeyForm from '../components/api-key-form';

const ApiKey: React.FC = () => {
  return (
    <Stack spacing={3}>
      <Title />
      <ApiKeyExplanation />
      <ApiKeyForm />
    </Stack>
  );
};

export default ApiKey;
