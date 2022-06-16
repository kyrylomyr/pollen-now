import { Card, CardContent, Grid } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
      <Card>
        <CardContent>
          <h1>Login</h1>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
