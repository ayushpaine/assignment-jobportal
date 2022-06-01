import React from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { FilledInput } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Chip } from "@mui/material";
import { useRef } from "react";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { db } from "../../firebase/config";
import { collection } from "firebase/firestore";

const ModalJob = (props) => {
  const initialState = {
    category: "",
    companyName: "",
    description: "",
    duration: "",
    functionalArea: "",
    minGradBatch: "",
    maxGradBatch: "",
    jobTags: [],
    jobTitle: "",
    skills: [],
    minYrsExp: "",
    maxYrsExp: "",
    location: "",
  };

  const [loading, setLoading] = useState(false);
  const [location1, setLocation1] = useState("");
  const [chips1, setChips1] = useState([]);
  const textInput1 = useRef(null);
  const [location, setLocation] = useState("");
  const [chips, setChips] = useState([]);
  const textInput = useRef(null);

  const [open, setOpen] = useState(true);
  const [jobDetails, setJobDetails] = useState(initialState);

  jobDetails.description = jobDetails.description.replace(/(\r\n|\n|\r)/gm, "");

  const handleKeyDown1 = (e) => {
    if (
      location1.length > 0 &&
      !chips1.includes(location1) &&
      e.key === "Enter"
    ) {
      setChips1([...chips1, location1]);
      setLocation1("");
      textInput1.current.value = "";
      setJobDetails((oldState) => ({
        ...oldState,
        skills: [...chips1, location1],
      }));
    } else if (
      location1.length >= 0 &&
      chips1.includes(location1) &&
      e.key === "Enter"
    ) {
      textInput1.current.value = "";
    }
  };
  const handleDelete1 = (id) => {
    setChips1((prev) => {
      return prev.filter((chip, index) => {
        return id !== index;
      });
    });
    setJobDetails((oldState) => ({
      ...oldState,
      skills: [
        ...chips1.filter((chip, index) => {
          return id !== index;
        }),
      ],
    }));
  };

  const handleKeyDown = (e) => {
    if (location.length > 0 && !chips.includes(location) && e.key === "Enter") {
      setChips([...chips, location]);
      setLocation("");
      textInput.current.value = "";
      setJobDetails((oldState) => ({
        ...oldState,
        jobTags: [...chips, location],
      }));
    } else if (
      location.length >= 0 &&
      chips.includes(location) &&
      e.key === "Enter"
    ) {
      textInput.current.value = "";
    }
  };
  const handleDelete = (id) => {
    setChips((prev) => {
      return prev.filter((chip, index) => {
        return id !== index;
      });
    });

    setJobDetails((oldState) => ({
      ...oldState,
      jobTags: [
        ...chips.filter((chip, index) => {
          return id !== index;
        }),
      ],
    }));
  };

  const handleChange = (e) => {
    setJobDetails((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    for (const item in jobDetails) {
      if (typeof jobDetails[item] === "string" && !jobDetails[item]) {
        alert("Please fill all the required fields marked with a star");
        return;
      }
      if (!jobDetails.skills.length) {
        alert("Please fill all the required fields marked with a star");
        return;
      }
    }
    const body = JSON.stringify(jobDetails);

    fetch("http://localhost:8001/v1jobs/job", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(body);
    setLoading(true);
    await props.postJob(jobDetails);
    closeModal();
    setChips1([]);
    setChips([]);
  };
  const handleSubmitAnother = async (e) => {
    for (const item in jobDetails) {
      if (typeof jobDetails[item] === "string" && !jobDetails[item]) {
        alert("Please fill all the required fields marked with a star");
        return;
      }
      if (!jobDetails.skills.length) {
        alert("Please fill all the required fields marked with a star");
        return;
      }
    }
    const body = JSON.stringify(jobDetails);

    fetch("http://localhost:8001/v1jobs/job", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(body);
    setLoading(true);
    await props.postJob(jobDetails);
    setJobDetails(initialState);
    setChips1([]);
    setChips([]);
    setLoading(false);
  };

  const closeModal = () => {
    setJobDetails(initialState);
    props.closeModal();
    setLoading(false);
  };

  return (
    <>
      <Dialog open={props.jobModal} fullWidth>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => setOpen(!open)}
          >
            <Typography variant="h5">Post Job</Typography>
            <IconButton onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            rowSpacing={2}
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "#7f0000",
                }}
              >
                Basic Details
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Company Name*</Typography>
              <FilledInput
                onChange={handleChange}
                name="companyName"
                value={jobDetails.companyName}
                placeholder="Name of the company"
                disableUnderline
                sx={{
                  width: "100%",
                  marginTop: "8px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Title*</Typography>
              <FilledInput
                onChange={handleChange}
                name="jobTitle"
                value={jobDetails.jobTitle}
                placeholder="Write a title that appropriately describes this job"
                disableUnderline
                sx={{
                  width: "100%",
                  marginTop: "8px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Location*</Typography>
              <FilledInput
                onChange={handleChange}
                name="location"
                value={jobDetails.location}
                placeholder="+Add location"
                disableUnderline
                sx={{
                  width: "100%",
                  marginTop: "8px",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Must have skills*</Typography>
              <FilledInput
                name="skills"
                placeholder="Skills absolutely required for this job"
                disableUnderline
                sx={{
                  width: "100%",
                  marginTop: "8px",
                }}
                onChange={(e) => setLocation1(e.target.value)}
                onKeyDown={handleKeyDown1}
                inputRef={textInput1}
              />
              <Box marginTop={1}>
                {chips1.length !== 0
                  ? chips1.map((chip, i) => (
                      <Chip
                        color="secondary"
                        key={i}
                        label={chip}
                        sx={{
                          padding: "4px",
                          margin: "2px",
                        }}
                        onDelete={() => handleDelete1(i)}
                      />
                    ))
                  : null}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>Years of experience*</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginTop: "8px",
                  marginLeft: "-8px",
                }}
              >
                <Grid item xs={6}>
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <InputLabel
                      sx={{
                        top: "-5px",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        left: "-3px",
                      }}
                    >
                      Select Min
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="minYrsExp"
                      value={jobDetails.minYrsExp}
                      variant="filled"
                      disableUnderline
                      sx={{
                        backgroundColor: "grey",
                        flex: "1",
                        margin: "0px 10px",
                        width: "90%",
                      }}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <MenuItem value={i + 1}>{i + 1}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <InputLabel
                      sx={{
                        top: "-5px",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        left: "-3px",
                      }}
                    >
                      Select Maxchips
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="maxYrsExp"
                      value={jobDetails.maxYrsExp}
                      variant="filled"
                      disableUnderline
                      sx={{
                        backgroundColor: "grey",
                        flex: "1",
                        margin: "0px 10px",
                        width: "90%",
                      }}
                    >
                      {[...Array(5).keys()].map((i) => (
                        <MenuItem value={5 * (i + 1)}>{5 * (i + 1)}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Duration*</Typography>
              <FormControl
                sx={{
                  width: "100%",
                  top: "10px",
                }}
              >
                <InputLabel
                  sx={{
                    top: "-5px",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    left: "-12px",
                  }}
                >
                  Select Job Duration
                </InputLabel>
                <Select
                  onChange={handleChange}
                  name="duration"
                  value={jobDetails.duration}
                  variant="filled"
                  disableUnderline
                  sx={{
                    backgroundColor: "grey",
                    flex: "1",
                    margin: "0px 10px",
                    width: "100%",
                    left: "-10px",
                  }}
                >
                  <MenuItem value="Full Time">Full Time</MenuItem>
                  <MenuItem value="Part Time">Part Time</MenuItem>
                  <MenuItem value="Intern">Intern</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Description*</Typography>
              <FilledInput
                onChange={handleChange}
                name="description"
                value={jobDetails.description}
                multiline
                rows={6}
                maxRows={Infinity}
                placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
                disableUnderline
                sx={{
                  width: "100%",
                  marginTop: "8px",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={2}
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                sx={{
                  color: "#7f0000",
                }}
              >
                Targetting
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid item container>
                <Grid item xs={6}>
                  <Typography>Category*</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Functional Area*</Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginTop: "8px",
                  marginLeft: "-8px",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    flex: "1",
                  }}
                >
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <InputLabel
                      sx={{
                        top: "-5px",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        left: "-3px",
                      }}
                    >
                      Choose Category
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="category"
                      value={jobDetails.category}
                      variant="filled"
                      disableUnderline
                      sx={{
                        backgroundColor: "grey",
                        flex: "1",
                        margin: "0px 10px",
                        width: "90%",
                      }}
                    >
                      <MenuItem value="Student">Student</MenuItem>
                      <MenuItem value="Currently Unemployed">
                        Currently Unemployed
                      </MenuItem>
                      <MenuItem value="Working Professional">
                        Working Professional
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    flex: "1",
                  }}
                >
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <InputLabel
                      sx={{
                        top: "-5px",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        left: "-3px",
                      }}
                    >
                      Choose Functional Area
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="functionalArea"
                      value={jobDetails.functionalArea}
                      variant="filled"
                      disableUnderline
                      sx={{
                        backgroundColor: "grey",
                        flex: "1",
                        margin: "0px 10px",
                        width: "90%",
                      }}
                    >
                      <MenuItem value="Sales">Sales</MenuItem>
                      <MenuItem value="Operations">Operations</MenuItem>
                      <MenuItem value="Financing">Financing</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>Graduating Batch*</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginTop: "8px",
                  marginLeft: "-8px",
                }}
              >
                <Grid item xs={6}>
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <InputLabel
                      sx={{
                        top: "-5px",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        left: "-3px",
                      }}
                    >
                      Select Min Batch
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="minGradBatch"
                      value={jobDetails.minGradBatch}
                      variant="filled"
                      disableUnderline
                      sx={{
                        backgroundColor: "grey",
                        flex: "1",
                        margin: "0px 10px",
                        width: "90%",
                      }}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <MenuItem value={i + 1 + 2015}>{i + 1 + 2015}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl
                    sx={{
                      width: "100%",
                    }}
                  >
                    <InputLabel
                      sx={{
                        top: "-5px",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        left: "-3px",
                      }}
                    >
                      Select Max Batch
                    </InputLabel>
                    <Select
                      onChange={handleChange}
                      name="maxGradBatch"
                      value={jobDetails.maxGradBatch}
                      variant="filled"
                      disableUnderline
                      sx={{
                        backgroundColor: "grey",
                        flex: "1",
                        margin: "0px 10px",
                        width: "90%",
                      }}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <MenuItem value={i + 1 + 2015}>{i + 1 + 2015}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>Job Tags</Typography>
              <FilledInput
                name="jobTags"
                placeholder="+ Add job tag"
                disableUnderline
                sx={{
                  width: "100%",
                  marginTop: "8px",
                }}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={handleKeyDown}
                inputRef={textInput}
              />
              {
                <Box marginTop={1}>
                  {chips.length !== 0
                    ? chips.map((chip, i) => (
                        <Chip
                          color="secondary"
                          key={i}
                          label={chip}
                          sx={{
                            padding: "4px",
                            margin: "2px",
                          }}
                          onDelete={() => handleDelete(i)}
                        />
                      ))
                    : null}
                </Box>
              }
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid
            container
            sx={{
              color: "red",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingX: "6px",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="caption">*Required Fields</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={handleSubmit}
                disable={loading}
              >
                {loading ? (
                  <CircularProgress color="secondary" size="22" />
                ) : (
                  "Post Job"
                )}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={handleSubmitAnother}
                disable={loading}
              >
                {loading ? (
                  <CircularProgress color="secondary" size="22" />
                ) : (
                  "Post Job and Submit Another"
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalJob;
