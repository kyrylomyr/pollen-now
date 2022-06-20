import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ApiKeyContextProvider from './contexts/api-key-context';
import App from './App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <ApiKeyContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiKeyContextProvider>
  </ThemeProvider>
);
