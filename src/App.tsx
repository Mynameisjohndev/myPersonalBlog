import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global/styles';
import { Routes } from './routes/index.routes';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
