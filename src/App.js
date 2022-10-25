import { ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage';
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <NavBar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
