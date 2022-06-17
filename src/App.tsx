import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ApiKeyContextProvider from './contexts/api-key-context';
import Layout from './components/layout';
import ApiKey from './pages/api-key';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ApiKeyContextProvider>
        <Layout>
          <ApiKey />
        </Layout>
      </ApiKeyContextProvider>
    </ThemeProvider>
  );
};

export default App;
