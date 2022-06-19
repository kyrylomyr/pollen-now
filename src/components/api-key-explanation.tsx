import { Link, Stack, Typography } from '@mui/material';

const ApiKeyExplanation: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Typography>
        Welcome to the application that you will love to use to quickly get the grass polen forecast!
      </Typography>
      <Typography>
        This is a free{' '}
        <Link href="https://github.com/kyrylomyr/pollen-now" underline="none" target="_blank" rel="noreferrer">
          open-source
        </Link>{' '}
        project withouts ads that does not have a server and works entirely in your browser.
      </Typography>
      <Typography>
        A forecast is requested directly from the{' '}
        <Link href="https://www.weatherbit.io" underline="none" target="_blank" rel="noreferrer">
          weatherbit.io
        </Link>{' '}
        service.
      </Typography>
      <Typography>
        Please,{' '}
        <Link href="https://www.weatherbit.io/account/create" underline="none" target="_blank" rel="noreferrer">
          create a free Weatherbit account
        </Link>{' '}
        and provide your personal API Key here. It will be saved in the local storage of your browser and used only for
        the forecast requests.
      </Typography>
    </Stack>
  );
};

export default ApiKeyExplanation;
