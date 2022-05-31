import React from "react";
import { Box } from "@mui/system";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import { FilledInput } from "@mui/material";
import { Select } from "@mui/material";
import { useState } from "react";
import { MenuItem } from "@mui/material";
import { Chip } from "@mui/material";
import { useRef } from "react";
import jobDetails from "../ModalJob/jobDetails";

const ModalJobBasic = () => {
  const [checked, setChecked] = useState(false);
  const [location, setLocation] = useState("");
  const [chips, setChips] = useState([]);
  const textInput = useRef(null);

  const handleKeyDown = (e) => {
    if (location.length > 0 && !chips.includes(location) && e.key === "Enter") {
      setChips([...chips, location]);
      setLocation("");
      textInput.current.value = "";
    }
  };
  const handleDelete = (id) => {
    setChips((prev) => {
      return prev.filter((chip, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
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
          <Typography
            sx={{
              display: "flex",
              color: "grey.600",
            }}
          >
            If remote then check this
          </Typography>
          <Checkbox
            sx={{
              left: "-12px",
            }}
            onChange={() => setChecked(!checked)}
          />
          {!checked && (
            <FilledInput
              placeholder="If not remote then add Location"
              disableUnderline
              sx={{
                width: "100%",
                marginTop: "8px",
              }}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography>Must have skills*</Typography>
          <FilledInput
            placeholder="Skills absolutely required for this job"
            disableUnderline
            sx={{
              width: "100%",
              marginTop: "8px",
            }}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyDown}
            inputRef={textInput}
          />
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
                  Select Max
                </InputLabel>
                <Select
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
    </>
  );
};

export default ModalJobBasic;
