import { FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/material";

const SearchTag = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "8%",
          marginRight: "-12%",
          padding: "16px",
          backgroundColor: "white",
          marginTop: "-4%",
          borderRadius: "5px",
        }}
      >
        <FormControl
          sx={{
            flex: "1",
          }}
        >
          <InputLabel
            sx={{
              top: "-8px",
              justifyContent: "center",
              alignContent: "center",
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
            }}
          >
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            flex: "1",
          }}
        >
          <InputLabel
            sx={{
              top: "-8px",
            }}
          >
            Select Job Location
          </InputLabel>
          <Select
            variant="filled"
            disableUnderline
            sx={{
              backgroundColor: "grey",
              flex: "1",
              margin: "0px 10px",
            }}
          >
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="On-Site">On-Site</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            flex: "1",
          }}
        >
          <Button
            variant="contained"
            disableElevation
            sx={{
              flex: "1",
              margin: "0px 10px",
            }}
          >
            Filter
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default SearchTag;
