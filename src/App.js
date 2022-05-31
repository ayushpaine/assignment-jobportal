import theme from "./themes/theme";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import SearchTag from "./components/SearchTag";
import ModalJob from "./components/ModalJob";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ModalJob />
      <Grid container justify="center ">
        <Grid item xs={10}>
          <SearchTag />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
