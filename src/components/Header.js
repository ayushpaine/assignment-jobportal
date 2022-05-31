import React from "react";
import { Box } from "@mui/system";
import { Grid, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import theme from "../themes/theme";

const Header = () => {
  return (
    <>
      <Box
        px={15}
        py={10}
        bgcolor="secondary.main"
        color="white"
        component="span"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={1}
        borderRadius={5}
      >
        <Box>
          <Typography variant="h4">Job Portal</Typography>
        </Box>
        <Box>
          <Button variant="contained" disableElevation>
            Post New Job
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
