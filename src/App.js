import theme from "./themes/theme";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import SearchTag from "./components/SearchTag";
import ModalJob from "./components/modal/ModalJob";
import { useState } from "react";
import { useEffect } from "react";
import { app, db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const req = await getDocs(collection(db, "jobs"));
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
    }));

    setJobs(tempJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
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
