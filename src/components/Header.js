import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const Header = (props) => {
  return (
    <>
      <Grid
        container
        px={15}
        py={10}
        bgcolor="secondary.main"
        color="white"
        component="span"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius={5}
        flex={1}
        width="98%"
        m={2}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",

            alignSelf: "flex-end",
          }}
        >
          <Typography variant="h4" align="center">
            Job Portal
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
              alignSelf: "flex-end",
            }}
            variant="contained"
            disableElevation
            onClick={props.openNewModal}
          >
            Post New Job
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
