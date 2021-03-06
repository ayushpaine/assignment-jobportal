import theme from "./themes/theme";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import ModalJob from "./components/modal/ModalJob";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { db } from "./firebase/config";
import { addDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import Card from "./components/Card";
import { Search } from "@mui/icons-material";
import { query, where } from "firebase/firestore";
import JobDetails from "./components/modal/JobDetails";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobModal, setJobModal] = useState(false);
  const [jobInfo, setJobInfo] = useState({});

  const fetchJobs = async () => {
    setLoading(true);
    const req = await getDocs(collection(db, "jobs"));
    const tempJobs = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
    }));

    setJobs(tempJobs);
    setLoading(false);
  };

  const postJob = async (jobDetails) => {
    await addDoc(collection(db, "jobs"), jobDetails);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header openNewModal={() => setJobModal(true)} />
      <ModalJob
        postJob={postJob}
        jobModal={jobModal}
        closeModal={() => setJobModal(false)}
      />
      <JobDetails job={jobInfo} closeModal={() => setJobInfo({})} />

      <Grid container justify="center ">
        <Grid item xs={10}>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                paddingLeft: "18.5%",
                marginTop: "-14em",
              }}
            >
              <CircularProgress
                size="75px"
                sx={{
                  justifyContent: "center",
                }}
              />
            </Box>
          ) : (
            jobs.map((job) => (
              <Card open={() => setJobInfo(job)} key={job.id} {...job} />
            ))
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
