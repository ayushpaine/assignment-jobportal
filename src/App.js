import Box from "@mui/material/Box";
import theme from "./themes/theme";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { Grid, Paper, Button, Typography } from "@mui/material";
import SearchTag from "./components/SearchTag";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container justify="center ">
        <Grid item xs={10}>
          <SearchTag />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
