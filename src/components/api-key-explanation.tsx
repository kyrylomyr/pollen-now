import { Link, Stack, Typography } from '@mui/material';

const ApiKeyExplanation: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Typography>
        This is a free{' '}
        <Link href="https://github.com/kyrylomyr/pollen-now" underline="none" target="_blank" rel="noreferrer">
          open-source
        </Link>{' '}
        application that works entirely in your browser and does not send information about you to any server.
      </Typography>
      <Typography>
        It does, however, request the forecast directly from the{' '}
        <Link href="https://accuweather.com" underline="none" target="_blank" rel="noreferrer">
          AccuWeather
        </Link>{' '}
        provider.
      </Typography>
      <Typography>
        To make it happen you must{' '}
        <Link href="https://developer.accuweather.com" underline="none" target="_blank" rel="noreferrer">
          register in their API
        </Link>{' '}
        and provide your personal API key here. It will be saved in the cache of your browser and used for forecast
        requests.
      </Typography>
    </Stack>
  );
};

export default ApiKeyExplanation;
