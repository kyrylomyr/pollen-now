import { Link, Typography } from '@mui/material';

const Credits: React.FC = () => {
  return (
    <Typography mt={5} variant="caption">
      Powered by{' '}
      <Link href="https://www.weatherbit.io" underline="none" target="_blank" rel="noreferrer">
        weatherbit.io
      </Link>
    </Typography>
  );
};

export default Credits;
