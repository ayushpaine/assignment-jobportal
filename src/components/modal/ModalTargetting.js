import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useRef } from "react";
import { FilledInput } from "@mui/material";
import { Chip } from "@mui/material";
import jobDetails from "../data/jobDetails";

const ModalTargetting = () => {
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
      </Grid>
    </>
  );
};

export default ModalTargetting;
