import Box from '@mui/material/Box';
import theme from './themes/theme';
import './App.css';
import { ThemeProvider } from '@mui/material';
import Header  from './components/Header';


function App() {
  
  return <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
}

export default App;
